'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 bg-[#333333]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CTA Buttons */}
      <motion.div
        className="relative z-10 flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
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
    </section>
  )
}
