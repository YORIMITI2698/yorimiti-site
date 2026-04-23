const API_KEY = process.env.YOUTUBE_API_KEY

// キャッシュ設定
const CACHE_DURATION = 3600 * 1000; // 1時間
let videoCache = {
  'All': { data: null, time: 0 },
  'Motion Graphic': { data: null, time: 0 },
  'Drone Operation': { data: null, time: 0 },
  'Shooting': { data: null, time: 0 },
  'Editing': { data: null, time: 0 },
  'MIX': { data: null, time: 0 }
}

function isCacheValid(playlist) {
  return videoCache[playlist]?.data && (Date.now() - videoCache[playlist].time) < CACHE_DURATION
}

function getFromCache(playlist) {
  return videoCache[playlist]?.data || null
}

function setCache(playlist, data) {
  videoCache[playlist] = { data, time: Date.now() }
}

const playlists = {
  'Motion Graphic': 'PLSRpMUngmR9DDgpa7BvcxvVXljYVW6KaB',
  'Drone Operation': 'PLSRpMUngmR9DKqMXpiMm4gXKmaRQ1BoEX',
  'Shooting': 'PLSRpMUngmR9AGOnPd9AaUZg_9MGE0MaT4',
  'Editing': 'PLSRpMUngmR9CQa_yoYImxWwOaTa0GwURp',
  'MIX': 'PLmDG2bhYs8qOqOKUAUrYD4eeRfl65gtao'
}

async function fetchPlaylistVideos(playlistId, maxResults = 50) {
  let allVideos = []
  let pageToken = null
  const playlistType = Object.keys(playlists).find(key => playlists[key] === playlistId) || 'Unknown'

  try {
    do {
      const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems')
      url.searchParams.append('part', 'snippet')
      url.searchParams.append('playlistId', playlistId)
      url.searchParams.append('maxResults', Math.min(maxResults, 50))
      url.searchParams.append('key', API_KEY)
      if (pageToken) {
        url.searchParams.append('pageToken', pageToken)
      }

      const response = await fetch(url.toString())
      const data = await response.json()

      // Debug logging
      if (process.env.NODE_ENV === 'development') {
        console.log(`[API Debug] Playlist: ${playlistId}, Status: ${response.status}, Items: ${data.items ? data.items.length : 'none'}`);
        if (!data.items) {
          console.log(`[API Debug] Response data:`, JSON.stringify(data).substring(0, 500));
        }
      }

      if (!data.items) break

      const videos = data.items.map(item => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url,
        type: playlistType,
        publishedAt: item.snippet.publishedAt
      }))

      allVideos.push(...videos)
      pageToken = data.nextPageToken
      maxResults -= videos.length

      if (maxResults <= 0) break
    } while (pageToken)

    return allVideos
  } catch (error) {
    console.error('Error fetching playlist videos for', playlistId + ':', error.message)
    console.error('Full error:', error)
    return []
  }
}

async function enrichWithRealPublishDates(videos) {
  const videoIds = videos.map(v => v.id)
  const enriched = {}

  try {
    for (let i = 0; i < videoIds.length; i += 50) {
      const batch = videoIds.slice(i, i + 50)
      const url = new URL('https://www.googleapis.com/youtube/v3/videos')
      url.searchParams.append('part', 'snippet')
      url.searchParams.append('id', batch.join(','))
      url.searchParams.append('key', API_KEY)

      const response = await fetch(url.toString())
      const data = await response.json()

      if (data.items) {
        data.items.forEach(item => {
          enriched[item.id] = item.snippet.publishedAt
        })
      }
    }
  } catch (error) {
    console.error('Error enriching videos:', error)
  }

  return videos.map(video => ({
    ...video,
    publishedAt: enriched[video.id] || video.publishedAt
  }))
}

export default async function handler(req, res) {
  const { playlist, limit = 50 } = req.query

  if (!playlist) {
    return res.status(400).json({ error: 'Playlist parameter required' })
  }

  try {
    let videos = []

    // キャッシュをチェック
    if (isCacheValid(playlist)) {
      console.log(`[Cache HIT] ${playlist}`)
      videos = getFromCache(playlist)
    } else {
      console.log(`[Cache MISS] ${playlist} - Fetching from YouTube API`)

      if (playlist === 'All') {
        const allPlaylistsVideos = await Promise.all(
          Object.values(playlists).map(playlistId => fetchPlaylistVideos(playlistId, 999))
        )
        videos = allPlaylistsVideos.flat()
        videos = await enrichWithRealPublishDates(videos)
        videos = videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, parseInt(limit))
      } else if (playlists[playlist]) {
        videos = await fetchPlaylistVideos(playlists[playlist], parseInt(limit))
      } else {
        return res.status(400).json({ error: 'Invalid playlist' })
      }

      // キャッシュに保存
      setCache(playlist, videos)
    }

    res.status(200).json({ videos })
  } catch (error) {
    console.error('YouTube API error:', error)
    res.status(500).json({ error: 'Failed to fetch videos' })
  }
}
