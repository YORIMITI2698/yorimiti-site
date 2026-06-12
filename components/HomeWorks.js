'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import KineticTitle from '@/components/mv/KineticTitle'

export default function HomeWorks() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [selectedType, setSelectedType] = useState('All')
  const [loading, setLoading] = useState(true)

  const types = ['All', 'Motion Graphic', 'Drone Operation', 'MIX', 'Other']

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/api/youtube?playlist=${encodeURIComponent(selectedType)}&limit=9`)
        const data = await response.json()
        if (data.videos) {
          setVideos(data.videos.slice(0, 9))
        }
      } catch (error) {
        console.error('Failed to fetch videos:', error)
      }
      setLoading(false)
    }

    fetchVideos()
  }, [selectedType])

  return (
    <section className="relative py-32 px-4 bg-ink">
      <div className="max-w-7xl mx-auto">
        <KineticTitle text="WORKS" chapter="01" className="mb-16" />

        {/* Filter Buttons (playlist tabs) */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
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
                  ? 'bg-acid text-ink border-acid font-normal'
                  : 'border-line text-mute hover:border-acid hover:text-acid'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {selectedType === type && <span className="mr-1.5">▶</span>}
              {type}
            </motion.button>
          ))}
        </motion.div>

        {/* Works Grid */}
        {loading ? (
          <motion.div
            className="text-center tc text-xs text-mute tracking-[0.3em] py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="blink">● LOADING…</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {videos.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group relative aspect-video rounded-lg overflow-hidden border border-line hover:border-acid cursor-pointer transition-all scanlines"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Thumbnail */}
                <div className="absolute inset-0 bg-panel">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-all" />
                </div>

                {/* clip number */}
                <span className="tc absolute top-2 left-3 text-[9px] text-white/70 tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                  CUT {String(index + 1).padStart(2, '0')}
                </span>

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 border-2 border-acid rounded-full flex items-center justify-center bg-ink/40 backdrop-blur-sm">
                    <div className="w-0 h-0 border-l-8 border-l-acid border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                  </div>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* View All CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/works"
            className="group relative inline-block px-8 py-3 border border-fog/70 text-fog text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink"
          >
            <span className="absolute inset-0 bg-fog origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="relative">すべて見る</span>
          </Link>
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden border border-line"
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
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-acid hover:text-ink rounded-full flex items-center justify-center text-white text-2xl transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
