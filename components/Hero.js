'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-highlight"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay - Lighter */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Link
          href="/services"
          className="inline-block px-8 py-3 border border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all"
        >
          View Service
        </Link>
      </motion.div>
    </section>
  )
}
