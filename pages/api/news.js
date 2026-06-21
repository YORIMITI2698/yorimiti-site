import fs from 'fs'
import path from 'path'

// News items from a Google Sheet published as CSV.
// 1) In Google Sheets: ファイル → 共有 → ウェブに公開 → 形式「CSV」→ 公開
// 2) Paste that CSV URL below.
// Sheet columns (header row, order free): 日付/date, タイトル/title, 本文/body, 画像/image, リンク/link
// image: a filename placed in public/news/ (e.g. event1.jpg) OR a full https URL.
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1Ih4TA2TKAzt4EBDN3Q93pxCry6as6G7I4Jb-p8Sw2M8/export?format=csv' // Google Sheet (share: anyone with link = viewer)

let cache = { data: null, time: 0 }
const TTL = 15 * 1000 // 15s — near-immediate updates

// Minimal CSV parser (handles quotes, commas and newlines inside quotes)
function parseCSV(text) {
  const rows = []
  let row = [], field = '', q = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++ } else q = false
      } else field += c
    } else {
      if (c === '"') q = true
      else if (c === ',') { row.push(field); field = '' }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' }
      else if (c === '\r') { /* skip */ }
      else field += c
    }
  }
  if (field.length || row.length) { row.push(field); rows.push(row) }
  return rows
}

const KEY = {
  date: ['date', '日付', '日時'],
  title: ['title', 'タイトル', '見出し', '件名'],
  body: ['body', '本文', '内容', '詳細'],
  image: ['image', '画像', '写真', 'photo', 'img'],
  link: ['link', 'リンク', 'url'],
}
function mapHeader(h) {
  const low = (h || '').trim().toLowerCase()
  for (const k of Object.keys(KEY)) if (KEY[k].some((a) => a.toLowerCase() === low)) return k
  return null
}

function toImage(v) {
  let s = (v || '').trim()
  if (!s) return ''
  // Google Drive link -> direct image URL
  const drive = s.match(/(?:\/file\/d\/|[?&]id=|\/d\/)([A-Za-z0-9_-]{20,})/)
  if (/drive\.google\.com|docs\.google\.com/.test(s) && drive) {
    return `https://lh3.googleusercontent.com/d/${drive[1]}=w1200`
  }
  // already a direct URL
  if (/^https?:\/\//i.test(s)) return s
  // bare filename -> /news/<file>
  return `/news/${s.replace(/^\/?news\//, '')}`
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  try {
    if (cache.data && Date.now() - cache.time < TTL) {
      return res.status(200).json({ items: cache.data, cached: true })
    }
    let csv = ''
    if (SHEET_CSV_URL) {
      try {
        const r = await fetch(`${SHEET_CSV_URL}&_cb=${Date.now()}`, { signal: AbortSignal.timeout(8000), cache: 'no-store' })
        if (r.ok) csv = await r.text()
      } catch (e) { /* fall through to local */ }
    }
    if (!csv) {
      // fallback: local snapshot at public/news/data.csv
      try {
        csv = fs.readFileSync(path.join(process.cwd(), 'public', 'news', 'data.csv'), 'utf8')
      } catch (e) { csv = '' }
    }
    if (!csv) {
      if (cache.data) return res.status(200).json({ items: cache.data, stale: true })
      return res.status(200).json({ items: [] })
    }
    const rows = parseCSV(csv).filter((r) => r.some((c) => c && c.trim()))
    if (!rows.length) return res.status(200).json({ items: [] })
    const headers = rows[0].map(mapHeader)
    const items = rows.slice(1).map((cols) => {
      const o = {}
      headers.forEach((k, i) => { if (k) o[k] = (cols[i] || '').trim() })
      o.image = toImage(o.image)
      return o
    }).filter((o) => o.title || o.body)
    cache = { data: items, time: Date.now() }
    res.status(200).json({ items })
  } catch (e) {
    if (cache.data) return res.status(200).json({ items: cache.data, stale: true })
    res.status(500).json({ items: [], error: 'failed' })
  }
}
