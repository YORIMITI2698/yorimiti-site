// Server-side fetch of specific tweets via the public syndication endpoint
// (reliable, no auth, no client-side blocking). Add the tweet IDs you want to
// feature in TWEET_IDS below — the newest first.
const TWEET_IDS = [
  // '1790000000000000000',  ← put YORIMITI tweet IDs here
]

let cache = { data: null, time: 0 }
const TTL = 20 * 60 * 1000

const token = (id) => ((Number(id) / 1e15) * Math.PI).toString(36).replace(/(0+|\.)/g, '')

async function fetchTweet(id) {
  try {
    const url = `https://cdn.syndication.twimg.com/tweet-result?id=${id}&token=${token(id)}&lang=ja`
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; YORIMITI/1.0)' } })
    if (!r.ok) return null
    const j = await r.json()
    if (!j || !j.text) return null
    const photos = (j.mediaDetails || [])
      .filter((m) => m.type === 'photo' || m.type === 'video' || m.type === 'animated_gif')
      .map((m) => m.media_url_https)
      .filter(Boolean)
    return {
      id,
      text: j.text,
      createdAt: j.created_at || null,
      name: j.user?.name || '',
      screenName: j.user?.screen_name || '',
      avatar: j.user?.profile_image_url_https || '',
      photos,
      url: `https://x.com/${j.user?.screen_name}/status/${id}`,
    }
  } catch (e) {
    return null
  }
}

export default async function handler(req, res) {
  try {
    if (cache.data && Date.now() - cache.time < TTL) {
      return res.status(200).json({ tweets: cache.data })
    }
    const results = (await Promise.all(TWEET_IDS.map(fetchTweet))).filter(Boolean)
    cache = { data: results, time: Date.now() }
    res.status(200).json({ tweets: results })
  } catch (e) {
    res.status(500).json({ tweets: [], error: 'failed' })
  }
}
