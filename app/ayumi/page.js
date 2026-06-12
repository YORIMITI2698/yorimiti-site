'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'
import WashiBackground from '@/components/mv/WashiBackground'

// よりみちの歩み — hidden history page, found by following the footprints.
const milestones = [
  {
    date: '2023.04',
    title: '創業',
    description: 'ドローン空撮・映像制作事業を開始'
  },
  {
    date: '2024.01',
    title: 'RE::Locus 立ち上げ',
    description: 'グラフィックデザイン・アニメーション制作に参入'
  },
  {
    date: '2025.04',
    title: 'チーム拡大',
    description: 'Vsinger「來世」がVOID-LAB代表として参画'
  },
  {
    date: '2026.06',
    title: 'サービス統合',
    description: '映像・グラフィック・音声を統合したスタジオに進化'
  }
]

function FootPair({ className = '' }) {
  return (
    <span className={`inline-flex gap-1 text-acid ${className}`}>
      <svg width="9" height="15" viewBox="0 0 20 32" fill="currentColor" style={{ transform: 'rotate(-12deg)' }}>
        <ellipse cx="10" cy="11" rx="6" ry="9.5" />
        <ellipse cx="10" cy="26.5" rx="4.5" ry="4" />
      </svg>
      <svg width="9" height="15" viewBox="0 0 20 32" fill="currentColor" style={{ transform: 'scaleX(-1) rotate(-12deg) translateY(4px)' }}>
        <ellipse cx="10" cy="11" rx="6" ry="9.5" />
        <ellipse cx="10" cy="26.5" rx="4.5" ry="4" />
      </svg>
    </span>
  )
}

export default function Ayumi() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ['start 0.75', 'end 0.55'] })

  return (
    <main className="bg-ink min-h-screen">
      <Navbar />

      {/* Title */}
      <section className="relative pt-36 pb-16 px-4 text-center overflow-hidden">
        <WashiBackground />
        <motion.p
          className="tc text-[11px] sm:text-xs text-beni tracking-[0.4em] mb-4 relative"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          − あしあとを たどって −
        </motion.p>
        <motion.h1
          className="font-disp font-light text-5xl md:text-7xl tracking-[0.12em] text-fog relative"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          よりみちの歩み
        </motion.h1>
        <motion.p
          className="tc text-[10px] text-mute tracking-[0.35em] mt-6 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          HISTORY
        </motion.p>
      </section>

      {/* Timeline road */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div ref={lineRef} className="relative max-w-3xl mx-auto">
          {/* dashed road track */}
          <div
            className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{
              backgroundImage: 'linear-gradient(to bottom, #b3a98f 33%, transparent 0%)',
              backgroundSize: '2px 12px',
              backgroundRepeat: 'repeat-y',
            }}
          />
          {/* walked part grows with scroll */}
          <motion.div
            className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-beni origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-24 py-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className="relative grid grid-cols-[40px,1fr] sm:grid-cols-2 gap-6 items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                {/* node: footprints on the road */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-ink border border-line flex items-center justify-center shadow-sm">
                  <FootPair />
                </div>

                {/* card */}
                <div
                  className={`col-start-2 sm:col-span-1 ${
                    i % 2 === 0 ? 'sm:col-start-1 sm:pr-14 sm:text-right' : 'sm:col-start-2 sm:pl-14'
                  }`}
                >
                  <div className="inline-block bg-white border border-line rounded-sm p-6 shadow-[0_6px_20px_rgba(42,39,35,0.08)] hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(42,39,35,0.12)] transition-all text-left">
                    <p className="tc text-[11px] text-beni tracking-[0.3em] mb-2">{m.date}</p>
                    <h3 className="font-disp text-xl text-fog mb-2 tracking-wide">{m.title}</h3>
                    <p className="text-sm text-mute font-light leading-relaxed">{m.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* road continues */}
          <motion.p
            className="text-center tc text-[11px] text-mute tracking-[0.35em] pt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            そして、よりみちは つづく ─
          </motion.p>
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="group relative inline-block px-8 py-3 border border-beni text-beni text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink"
            >
              <span className="absolute inset-0 bg-beni origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <span className="relative">HOME へもどる</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Seekbar />
    </main>
  )
}
