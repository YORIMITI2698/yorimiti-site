'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
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
      <div className="absolute inset-0 bg-black/50" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wider"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Let's Create Together
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary font-light mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          あなたの想いを形に。YORIMITIがお手伝いします。<br />
          ご質問やご相談は、お気軽にお問い合わせください。
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Contact Us
          </Link>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-dark-highlight text-text-secondary text-sm font-light tracking-widest hover:border-white hover:text-white transition-all"
          >
            Follow Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
