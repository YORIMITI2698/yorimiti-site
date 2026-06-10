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
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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
          className="flex justify-center gap-6"
        >
          <Link
            href="/services"
            className="px-8 py-3 bg-white text-[#333333] font-light tracking-widest hover:bg-gray-200 transition-all"
          >
            View Services
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border-2 border-white text-white font-light tracking-widest hover:bg-white hover:text-[#333333] transition-all"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
