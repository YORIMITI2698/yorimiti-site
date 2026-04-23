'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

      {/* Animated Background - Updated for dark theme */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/5 to-transparent rounded-full top-10 left-5 blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  )
}
