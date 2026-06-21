// News items from the local CSV (public/news/data.csv), managed by the /admin tool.
import fs from 'fs'
import path from 'path'

let cache = { data: null, time: 0 }
const TTL = 5 * 1000

function parseCSV(text) {
  const rows = []
  let row = [], field = '', q = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++ } else q = false } else field += c
    } else {
      if (c === '"') q = true
      else if (c === ',') { row.push(field); field = '' }
      else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' }
      else if (c === '\r') {}
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
  const drive = s.match(/(?:\/file\/d\/|[?&]id=|\/d\/)([A-Za-z0-9_-]{20,})/)
  if (/drive\.google\.com|docs\.google\.com/.test(s) && drive) return `https://lh3.googleusercontent.com/d/${drive[1]}=w1200`
  if (/^https?:\/\//i.test(s)) return s
  return `/news/${s.replace(/^\/?news\//, '')}`
}

function readCsv() {
  return fs.readFileSync(path.join(process.cwd(), 'public', 'news', 'data.csv'), 'utf8')
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0')
  try {
    if (cache.data && Date.now() - cache.time < TTL) {
      return res.status(200).json({ items: cache.data, cached: true })
    }
    let csv = ''
    try { csv = readCsv() } catch (e) { csv = '' }
    if (!csv) {
      // fallback: fetch the static file via own origin
      try {
        const proto = req.headers['x-forwarded-proto'] || 'http'
        const r = await fetch(`${proto}://${req.headers.host}/news/data.csv?cb=${Date.now()}`, { cache: 'no-store' })
        if (r.ok) csv = await r.text()
      } catch (e) {}
    }
    if (!csv) return res.status(200).json({ items: [] })
    const rows = parseCSV(csv).filter((r) => r.some((c) => c && c.trim()))
    if (!rows.length) return res.status(200).json({ items: [] })
    const headers = rows[0].map(mapHeader)
    const items = rows.slice(1).map((cols) => {
      const o = {}
      headers.forEach((k, i) => { if (k) o[k] = (cols[i] || '').trim() })
      o.image = toImage(o.image)
      return o
    }).filter((o) => o.title || o.body)
    // newest date first (handles YYYY.MM / YYYY.MM.DD and unpadded months)
    const dateKey = (v) => {
      const p = String(v || '').split(/[^0-9]+/).filter(Boolean).map(Number)
      return (p[0] || 0) * 10000 + (p[1] || 0) * 100 + (p[2] || 0)
    }
    items.sort((a, b) => dateKey(b.date) - dateKey(a.date))
    cache = { data: items, time: Date.now() }
    res.status(200).json({ items })
  } catch (e) {
    res.status(500).json({ items: [], error: 'failed' })
  }
}
