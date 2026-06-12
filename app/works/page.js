'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'
import { useState, useEffect } from 'react'

export default function Works() {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedType, setSelectedType] = useState('All')
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  const types = ['All', 'Motion Graphic', 'Drone Operation', 'MIX', 'Other']

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/youtube?playlist=${encodeURIComponent(selectedType)}&limit=999`)
        const data = await response.json()
        if (data.videos) {
          setVideos(data.videos)
        }
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
      setLoading(false)
    }

    fetchVideos()
  }, [selectedType])

  return (
    <main className="bg-ink min-h-screen">
      <Navbar />

      {/* Works Title */}
      <section className="pt-20 px-4 bg-ink pb-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="font-disp font-light text-5xl md:text-7xl tracking-[0.12em] text-fog mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WORKS
          </motion.h1>
          <motion.p
            className="text-text-secondary font-light text-base max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            YORIMITIが手掛けた映像・グラフィックデザインのポートフォリオ
          </motion.p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-16 px-4 bg-ink border-y border-dark-highlight">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {types.map((type) => (
              <motion.button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`text-xs font-light tracking-widest px-4 py-2 rounded-full transition-all border ${
                  selectedType === type
                    ? 'bg-acid text-ink border-acid'
                    : 'border-dark-highlight text-text-secondary hover:border-beni hover:text-beni'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/grunge-v1.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="max-w-7xl mx-auto relative z-10">
          {loading ? (
            <motion.div
              className="text-center text-fog/70"
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
            >
              {videos.map((video, index) => (
                <motion.button
                  key={video.id}
                  onClick={() => setSelectedVideo(video)}
                  className="group relative aspect-video rounded-lg overflow-hidden border border-dark-highlight hover:border-beni cursor-pointer transition-all"
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
                    <div className="w-16 h-16 border-2 border-fog/60 rounded-full flex items-center justify-center">
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
                    <h3 className="text-fog font-light text-sm line-clamp-2">
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
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-fog text-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      <Footer />

      <Seekbar />
    </main>
  )
}
                       