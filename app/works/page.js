'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Works() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const works = [
    {
      id: 1,
      title: 'ボカロMV作品 01',
      type: 'Motion Graphic',
      youtubeId: '_Nso5VFZh20',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 2,
      title: 'ボカロMV作品 02',
      type: 'Motion Graphic',
      youtubeId: 'n5LqGOk_WBA',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 3,
      title: 'ボカロMV作品 03',
      type: 'Motion Graphic',
      youtubeId: 'Qu_fs__Kd9M',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 4,
      title: 'ボカロMV作品 04',
      type: 'Motion Graphic',
      youtubeId: 'ief1wDn1Hvw',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 5,
      title: 'ボカロMV作品 05',
      type: 'Motion Graphic',
      youtubeId: 'b5YqyYZHuIg',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 6,
      title: 'ボカロMV作品 06',
      type: 'Motion Graphic',
      youtubeId: 'wITTxektnLI',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 7,
      title: 'ボカロMV作品 07',
      type: 'Motion Graphic',
      youtubeId: 'otS8ARQdRjg',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 8,
      title: 'ボカロMV作品 08',
      type: 'Motion Graphic',
      youtubeId: 'vwfPjrwr8oQ',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 9,
      title: 'ボカロMV作品 09',
      type: 'Motion Graphic',
      youtubeId: 'i6gfndh_t0o',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 10,
      title: 'ボカロMV作品 10',
      type: 'Motion Graphic',
      youtubeId: 'WVUyDkCgreY',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 11,
      title: 'ボカロMV作品 11',
      type: 'Motion Graphic',
      youtubeId: '0wWg1sQ-Odw',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    },
    {
      id: 12,
      title: 'ボカロMV作品 12',
      type: 'Motion Graphic',
      youtubeId: 'WgApJT4Grhs',
      thumbnail: '/0008.jpg',
      description: 'ボカロMV制作'
    }
  ]

  const types = ['All', 'Motion Graphic', 'Drone Operation', 'Shooting', 'Editing', 'MIX']
  const [selectedType, setSelectedType] = useState('All')

  const filteredWorks = selectedType === 'All'
    ? works
    : works.filter(work => work.type === selectedType)

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Works Title */}
      <section className="pt-20 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-wider"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WORKS
          </motion.h1>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-16 px-4 bg-dark-bg border-y border-dark-highlight">
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
                    ? 'bg-white text-black border-white'
                    : 'border-dark-highlight text-text-secondary hover:border-white hover:text-white'
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
      <section className="py-32 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {filteredWorks.map((work, index) => (
              <motion.button
                key={work.id}
                onClick={() => setSelectedVideo(work)}
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
                    src={`https://img.youtube.com/vi/${work.youtubeId}/maxresdefault.jpg`}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${work.youtubeId}/hqdefault.jpg`
                    }}
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
                  <h3 className="text-white font-light text-sm" style={{ fontFamily: 'Georgia, serif' }}>
                    {work.title}
                  </h3>
                  <p className="text-xs text-text-secondary">{work.type}</p>
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
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
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
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

      <Footer />
    </main>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        