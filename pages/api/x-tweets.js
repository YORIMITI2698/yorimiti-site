// Server-side timeline of @KotaUehara2698 via Nitter RSS (no auth, no client
// blocking). Tries multiple instances; parses text/date/images/ids; converts
// media to pbs.twimg.com. Cached.
const SCREEN_NAME = 'KotaUehara2698'
const INSTANCES = [
  'https://nitter.net',
  'https://nitter.poast.org',
  'https://lightbrd.com',
  'https://nitter.privacydev.net',
]

let cache = { data: null, time: 0 }
const TTL = 20 * 60 * 1000

function decodeEntities(s) {
  return s
    .replace(/<!\[CDATA\[/g, '').replace(/\]\]>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .trim()
}

function toPbs(url) {
  // .../pic/media%2FNAME.jpg  -> https://pbs.twimg.com/media/NAME?format=jpg&name=small
  const m = decodeURIComponent(url).match(/media\/([A-Za-z0-9_-]+)\.(jpg|png|jpeg)/i)
  if (!m) return null
  const ext = m[2].toLowerCase() === 'png' ? 'png' : 'jpg'
  return `https://pbs.twimg.com/media/${m[1]}?format=${ext}&name=small`
}

function parseRss(xml) {
  const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || []
  const tweets = []
  for (const it of items) {
    const link = (it.match(/<link>([\s\S]*?)<\/link>/) || [])[1] || ''
    const idm = link.match(/status\/(\d+)/)
    if (!idm) continue
    const id = idm[1]
    const descRaw = (it.match(/<description>([\s\S]*?)<\/description>/) || [])[1] || ''
    const titleRaw = (it.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || ''
    const text = decodeEntities(descRaw) || decodeEntities(titleRaw)
    const date = (it.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1] || null
    const photos = [...descRaw.matchAll(/src="([^"]+)"/g)]
      .map((m) => toPbs(m[1]))
      .filter(Boolean)
    // skip pure retweets (RT by) without own content is fine to keep
    tweets.push({
      id,
      text,
      createdAt: date,
      photos: [...new Set(photos)].slice(0, 4),
      url: `https://x.com/${SCREEN_NAME}/status/${id}`,
    })
  }
  return tweets
}

async function fetchFrom(base) {
  try {
    const r = await fetch(`${base}/${SCREEN_NAME}/rss`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36' },
      signal: AbortSignal.timeout(8000),
    })
    if (!r.ok) return null
    const xml = await r.text()
    if (!xml) return null
    const tweets = parseRss(xml)
    return tweets.length ? tweets : null
  } catch (e) {
    return null
  }
}

async function loadTweets() {
  for (const base of INSTANCES) {
    const attempts = base.includes('nitter.net') ? 3 : 1
    for (let i = 0; i < attempts; i++) {
      const tweets = await fetchFrom(base)
      if (tweets) return tweets
      if (i < attempts - 1) await new Promise((r) => setTimeout(r, 1200))
    }
  }
  return null
}

export default async function handler(req, res) {
  try {
    // serve fresh cache
    if (cache.data && Date.now() - cache.time < TTL) {
      return res.status(200).json({ tweets: cache.data, cached: true })
    }
    const tweets = await loadTweets()
    if (tweets && tweets.length) {
      cache = { data: tweets, time: Date.now() }
      return res.status(200).json({ tweets })
    }
    // refresh failed → serve last known good (even if stale)
    if (cache.data) {
      return res.status(200).json({ tweets: cache.data, stale: true })
    }
    res.status(200).json({ tweets: [] })
  } catch (e) {
    if (cache.data) return res.status(200).json({ tweets: cache.data, stale: true })
    res.status(500).json({ tweets: [], error: 'failed' })
  }
}
