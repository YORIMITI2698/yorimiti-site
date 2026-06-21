// Commit & push the news changes (DEV ONLY) — uses the local machine's git.
import { exec } from 'child_process'

export default async function handler(req, res) {
  if (process.env.NODE_ENV === 'production') return res.status(403).json({ error: 'disabled in production' })
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' })
  const cmd = 'git add public/news && git commit -m "news: update via admin" && git push origin main'
  exec(cmd, { cwd: process.cwd(), timeout: 60000 }, (err, stdout, stderr) => {
    if (err && !/nothing to commit/.test(stdout + stderr)) {
      return res.status(500).json({ ok: false, output: (stdout + '\n' + stderr).trim() })
    }
    res.status(200).json({ ok: true, output: (stdout + '\n' + stderr).trim() })
  })
}
