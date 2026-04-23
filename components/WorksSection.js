'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function WorksSection() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedPlaylist, setSelectedPlaylist] = useState('All')
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  const playlists = ['All', 'Motion Graphic', 'Drone Operation', 'Shooting', 'Editing', 'MIX']

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
      try {
        const limit = selectedPlaylist === 'All' ? 9 : 50
        const response = await fetch(`/api/youtube?playlist=${encodeURIComponent(selectedPlaylist)}&limit=${limit}`)
        const data = await response.json()
        if (data.videos) {
          const displayLimit = selectedPlaylist === 'All' ? 9 : 50
          setVideos(data.videos.slice(0, displayLimit))
        }
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
      setLoading(false)
    }

    fetchVideos()
  }, [selectedPlaylist])

  return (
    <>
      {/* Works Section */}
      <section className="relative min-h-screen py-32 px-4 bg-dark-bg overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-15 z-0"
        >
          <source src="/BLUEDigital.mp4" type="video/mp4" />
        </video>

        {/* Works Title */}
        <div className="relative z-10 max-w-7xl mx-auto mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white tracking-wider text-center"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            WORKS
          </motion.h2>
        </div>

        {/* Playlist Tabs */}
        <div className="relative z-20 max-w-7xl mx-auto mb-12">
          <motion.div
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {playlists.map((playlist) => (
              <button
                key={playlist}
                onClick={() => setSelectedPlaylist(playlist)}
                className={`px-4 md:px-6 py-2 border text-sm font-light tracking-widest transition-all ${
                  selectedPlaylist === playlist
                    ? 'border-white text-white bg-white/10'
                    : 'border-white/50 text-white/70 hover:border-white hover:text-white'
                }`}
              >
                {playlist}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto">
          {loading ? (
            <motion.div
              className="text-center text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p>Loading videos...</p>
            </motion.div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              key={selectedPlaylist}
            >
              {videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative aspect-video rounded-lg overflow-hidden border border-dark-highlight hover:border-white cursor-pointer transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Thumbnail */}
                  <div className="absolute inset-0 bg-dark-highlight">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                  </div>

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                    </div>
                  </motion.div>

                  {/* Info */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white font-light text-sm line-clamp-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {video.title}
                    </h3>
                  </motion.div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <motion.button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
