'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomeWorks() {
  return (
    <section className="relative py-32 px-4 bg-[#333333]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            WORKS
          </h2>
          <p className="text-white font-light text-base max-w-2xl mx-auto">
            YORIMITIが携わった映像作品のポートフォリオ
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/works"
            className="inline-block px-8 py-3 border-2 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Works を見る
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
