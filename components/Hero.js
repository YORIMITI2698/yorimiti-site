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
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

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

      {/* Bottom Left - Logo and Title */}
      <div className="absolute bottom-8 left-8 z-10 flex items-center gap-4">
        {/* Logo */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Image
            src="/yorimiti-logo.png"
            alt="YORIMITI Logo"
            width={160}
            height={160}
            priority
            unoptimized
            className="w-40 h-40"
          />
        </motion.div>

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
