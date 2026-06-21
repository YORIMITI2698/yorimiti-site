// Add a news item (DEV ONLY). Writes image to public/news/ and prepends a row
// to public/news/data.csv. Disabled in production for safety.
import fs from 'fs'
import path from 'path'

export const config = { api: { bodyParser: { sizeLimit: '20mb' } } }

const HEADER = '日付,タイトル,本文,画像,リンク'
const esc = (v) => {
  v = (v ?? '').toString()
  return /[",\n\r]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v
}

export default async function handler(req, res) {
  if (process.env.NODE_ENV === 'production') return res.status(403).json({ error: 'admin disabled in production' })
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' })
  try {
    const { date = '', title = '', body = '', link = '', imageBase64 = '', imageName = '' } = req.body || {}
    if (!title && !body) return res.status(400).json({ error: 'title or body required' })

    const dir = path.join(process.cwd(), 'public', 'news')
    fs.mkdirSync(dir, { recursive: true })

    let image = ''
    if (imageBase64) {
      const ext = (imageName.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg'
      const fname = `news-${Date.now()}.${ext}`
      const b64 = imageBase64.includes(',') ? imageBase64.split(',').pop() : imageBase64
      fs.writeFileSync(path.join(dir, fname), Buffer.from(b64, 'base64'))
      image = fname
    }

    const csvPath = path.join(dir, 'data.csv')
    let existing = ''
    try { existing = fs.readFileSync(csvPath, 'utf8') } catch (e) {}
    const lines = existing.split('\n')
    const hasHeader = lines[0] && lines[0].includes('タイトル')
    const header = hasHeader ? lines[0] : HEADER
    const rest = hasHeader ? lines.slice(1).join('\n') : existing
    const newRow = [date, title, body, image, link].map(esc).join(',')
    const out = header.trim() + '\n' + newRow + (rest.trim() ? '\n' + rest.trim() : '') + '\n'
    fs.writeFileSync(csvPath, out, 'utf8')

    res.status(200).json({ ok: true, image })
  } catch (e) {
    res.status(500).json({ error: String(e.message || e) })
  }
}
