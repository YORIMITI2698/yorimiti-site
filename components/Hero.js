'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 bg-[#333333]">
      {/* Background Video - Subtle */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay - Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#333333] via-[#333333]/98 to-[#333333]/95" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8"
        >
          <span className="text-sm font-light text-gray-400 tracking-widest uppercase">
            Creative Studio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-7xl md:text-8xl lg:text-9xl font-light text-white text-center mb-6 tracking-tighter leading-none"
        >
          YORIMITI
        </motion.h1>

        {/* Tagline */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12"
        >
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            映像制作・グラフィックデザイン・音声制作。
            <br />
            <span className="text-gray-500">クリエイティブなすべてを、ひとつのスタジオで。</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="#services"
            className="group relative px-10 py-4 bg-white text-[#333333] text-sm font-light tracking-widest overflow-hidden hover:bg-gray-200 transition-all"
          >
            VIEW SERVICES
          </Link>
          <Link
            href="#contact"
            className="px-10 py-4 border-2 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-[#333333] transition-all"
          >
            GET IN TOUCH
          </Link>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
