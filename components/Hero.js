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
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-cyan-600/3 to-transparent rounded-full bottom-10 right-5 blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, reverse: true }}
      />

      {/* Bottom Left - Title Only */}
      <div className="absolute bottom-8 left-8 z-10">
        {/* Title */}
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-white leading-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          YORIMITI
        </motion.h1>
      </div>
    </section>
  )
}
