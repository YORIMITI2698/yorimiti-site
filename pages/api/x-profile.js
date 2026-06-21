// Server-side X (Twitter) profile fetch via the public FixTweet API.
// Reliable (no auth, no client-side blocking) — always returns real data.
let cache = { data: null, time: 0 }
const TTL = 30 * 60 * 1000 // 30 min

const SCREEN_NAME = 'KotaUehara2698'

export default async function handler(req, res) {
  try {
    if (cache.data && Date.now() - cache.time < TTL) {
      return res.status(200).json(cache.data)
    }
    const r = await fetch(`https://api.fxtwitter.com/${SCREEN_NAME}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; YORIMITI-site/1.0)' },
    })
    const j = await r.json()
    const u = j?.user
    if (!u) return res.status(502).json({ error: 'no user' })

    const data = {
      screenName: u.screen_name,
      name: u.name,
      description: u.raw_description?.text || u.description || '',
      avatar: (u.avatar_url || '').replace('_normal', '_400x400'),
      banner: u.banner_url || '',
      followers: u.followers ?? null,
      tweets: u.tweets ?? null,
      url: u.url || `https://x.com/${SCREEN_NAME}`,
    }
    cache = { data, time: Date.now() }
    res.status(200).json(data)
  } catch (e) {
    res.status(500).json({ error: 'fetch failed' })
  }
}
