'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Footer from '@/components/Footer'

export default function Works() {
  return (
    <motion.main
      className="bg-white"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5, originY: 0 }}
    >
      <Navbar />

      {/* Works Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black mb-6">
              Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              実績・ポートフォリオ
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      <Footer />
    </motion.main>
  )
}
