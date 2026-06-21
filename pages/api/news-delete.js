// Delete a news item by its index among data rows (DEV ONLY).
import fs from 'fs'
import path from 'path'

export default async function handler(req, res) {
  if (process.env.NODE_ENV === 'production') return res.status(403).json({ error: 'admin disabled in production' })
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' })
  try {
    const { index } = req.body || {}
    if (typeof index !== 'number') return res.status(400).json({ error: 'index required' })
    const csvPath = path.join(process.cwd(), 'public', 'news', 'data.csv')
    const text = fs.readFileSync(csvPath, 'utf8')
    // parse into rows preserving quoted fields
    const rows = []
    let row = [], field = '', q = false
    for (let i = 0; i < text.length; i++) {
      const c = text[i]
      if (q) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++ } else q = false } else field += c }
      else { if (c === '"') q = true; else if (c === ',') { row.push(field); field = '' } else if (c === '\n') { row.push(field); rows.push(row); row = []; field = '' } else if (c === '\r') {} else field += c }
    }
    if (field.length || row.length) { row.push(field); rows.push(row) }
    const dataRows = rows.filter((r) => r.some((c) => c && c.trim()))
    const header = dataRows[0]
    const items = dataRows.slice(1)
    if (index < 0 || index >= items.length) return res.status(400).json({ error: 'bad index' })
    items.splice(index, 1)
    const esc = (v) => { v = (v ?? '').toString(); return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v }
    const out = [header, ...items].map((r) => r.map(esc).join(',')).join('\n') + '\n'
    fs.writeFileSync(csvPath, out, 'utf8')
    res.status(200).json({ ok: true })
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) })
  }
}
