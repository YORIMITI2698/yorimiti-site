'use client'

import { motion } from 'framer-motion'

const portfolioItems = [
  '_Nso5VFZh20',
  'n5LqGOk_WBA',
  'Qu_fs__Kd9M',
  'ief1wDn1Hvw',
  'b5YqyYZHuIg',
  'wITTxektnLI',
  'otS8ARQdRjg',
  'vwfPjrwr8oQ',
  'i6gfndh_t0o',
  'WVUyDkCgreY',
  '0wWg1sQ-Odw',
  'WgApJT4Grhs'
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-full mx-auto px-4 lg:px-12">
        <motion.h2
          className="text-7xl md:text-8xl font-light italic text-center mb-16 text-gray-900"
          style={{ fontFamily: 'Georgia, Garamond, serif' }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Works
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((videoId, index) => (
            <motion.div
              key={index}
              className="relative aspect-video rounded-xl overflow-hidden border border-purple-500/20 hover:border-accent-cyan transition-all group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?controls=1`}
                title={`Video ${index + 1}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">▶</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
