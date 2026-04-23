const API_KEY = 'AIzaSyD44waCdnWRSoLuwnNIz3UiqP39wut2VgU'

const playlists = {
  'Motion Graphic': 'PLSRpMUngmR9DDgpa7BvcxvVXljYVW6KaB',
  'Drone Operation': 'PLSRpMUngmR9DKqMXpiMm4gXKmaRQ1BoEX',
  'Shooting': 'PLSRpMUngmR9AGOnPd9AaUZg_9MGE0MaT4',
  'Editing': 'PLSRpMUngmR9CQa_yoYImxWwOaTa0GwURp',
  'MIX': 'PLSRpMUngmR9AjMTxFFeGBgu7_EVKGksar'
}

export default async function handler(req, res) {
  const { playlist } = req.query

  if (!playlist || !playlists[playlist]) {
    return res.status(400).json({ error: 'Invalid playlist' })
  }

  try {
    const playlistId = playlists[playlist]

    // Get playlist items
    const itemsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?` +
      `part=snippet&` +
      `playlistId=${playlistId}&` +
      `maxResults=6&` +
      `key=${API_KEY}`
    )

    const itemsData = await itemsResponse.json()

    if (!itemsData.items) {
      return res.status(500).json({ error: 'Failed to fetch playlist items' })
    }

    // Extract video IDs
    const videos = itemsData.items.map(item => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high.url
    }))

    res.status(200).json({ videos })
  } catch (error) {
    console.error('YouTube API error:', error)
    res.status(500).json({ error: 'Failed to fetch videos' })
  }
}
