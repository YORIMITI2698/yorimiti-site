'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import KineticTitle from '@/components/mv/KineticTitle'

// v2: works as a photo album collected along the road.
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
    <section className="relative py-32 px-4 bg-ink dark:bg-[#171a26]">
      <div className="max-w-7xl mx-auto">
        <KineticTitle text="WORKS" chapter="01" className="mb-16" />

        {/* Filter Buttons */}
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
                  ? 'bg-acid dark:bg-[#e3c567] text-ink dark:text-[#171a26] border-acid dark:border-[#e3c567]'
                  : 'border-line dark:border-[#343a4d] text-mute dark:text-[#9aa0b0] bg-white/40 dark:bg-transparent hover:border-acid hover:text-acid dark:hover:border-[#e3c567] dark:hover:text-[#e3c567]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type}
            </motion.button>
          ))}
        </motion.div>

        {/* Photo album grid */}
        {loading ? (
          <motion.div
            className="text-center tc text-xs text-mute tracking-[0.3em] py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="blink">みちくさ中…</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {videos.map((video, index) => (
              <motion.button
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group relative cursor-pointer text-left"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, rotate: 0 }}
                style={{ rotate: index % 2 === 0 ? -1.2 : 1.2 }}
              >
                {/* photo frame */}
                <div className="relative bg-white p-2 pb-9 shadow-[0_8px_24px_rgba(42,39,35,0.14)] rounded-sm transition-shadow group-hover:shadow-[0_14px_32px_rgba(42,39,35,0.2)]">
                  <div className="relative aspect-video overflow-hidden rounded-sm bg-panel">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                      <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center bg-beni/80">
                        <div className="w-0 h-0 border-l-8 border-l-white border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                  {/* caption */}
                  <p className="absolute bottom-2.5 left-0 right-0 text-center tc text-[10px] text-mute tracking-[0.25em]">
                    寄り道 No.{String(index + 1).padStart(2, '0')}
                  </p>
                </div>
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
            className="group relative inline-block px-8 py-3 border border-fog/60 dark:border-[#e8e6df]/60 text-fog dark:text-[#e8e6df] text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink dark:hover:text-[#171a26]"
          >
            <span className="absolute inset-0 bg-fog dark:bg-[#e8e6df] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="relative">すべて見る</span>
          </Link>
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-fog/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video rounded-sm overflow-hidden bg-white p-2 shadow-2xl"
              initial={{ scale: 0.92, opacity: 0, rotate: -1 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
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
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-beni hover:text-white text-fog rounded-full flex items-center justify-center text-xl shadow transition-colors"
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
