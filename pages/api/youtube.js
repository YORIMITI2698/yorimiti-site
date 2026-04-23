const API_KEY = 'AIzaSyD44waCdnWRSoLuwnNIz3UiqP39wut2VgU'

const playlists = {
  'Motion Graphic': 'PLSRpMUngmR9DDgpa7BvcxvVXljYVW6KaB',
  'Drone Operation': 'PLSRpMUngmR9DKqMXpiMm4gXKmaRQ1BoEX',
  'Shooting': 'PLSRpMUngmR9AGOnPd9AaUZg_9MGE0MaT4',
  'Editing': 'PLSRpMUngmR9CQa_yoYImxWwOaTa0GwURp',
  'MIX': 'PLSRpMUngmR9AjMTxFFeGBgu7_EVKGksar'
}

async function fetchPlaylistVideos(playlistId, maxResults = 50) {
  let allVideos = []
  let pageToken = null

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

      if (!data.items) break

      const videos = data.items.map(item => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url,
        type: Object.keys(playlists).find(key => playlists[key] === playlistId) || 'Unknown',
        publishedAt: item.snippet.publishedAt
      }))

      allVideos = [...allVideos, ...videos]
      pageToken = data.nextPageToken
      maxResults -= videos.length

      if (maxResults <= 0) break
    } while (pageToken)

    return allVideos
  } catch (error) {
    console.error('Error fetching playlist videos:', error)
    return []
  }
}

export default async function handler(req, res) {
  const { playlist, limit = 50 } = req.query

  if (!playlist) {
    return res.status(400).json({ error: 'Playlist parameter required' })
  }

  try {
    let videos = []

    if (playlist === 'All') {
      // Fetch videos from all playlists
      const allPlaylistsVideos = await Promise.all(
        Object.values(playlists).map(playlistId => fetchPlaylistVideos(playlistId, 999))
      )
      videos = allPlaylistsVideos.flat()
      // Sort by published date (newest first) and limit to requested amount
      videos = videos.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)).slice(0, parseInt(limit))
    } else if (playlists[playlist]) {
      // Fetch from specific playlist
      videos = await fetchPlaylistVideos(playlists[playlist], parseInt(limit))
    } else {
      return res.status(400).json({ error: 'Invalid playlist' })
    }

    res.status(200).json({ videos })
  } catch (error) {
    console.error('YouTube API error:', error)
    res.status(500).json({ error: 'Failed to fetch videos' })
  }
}
