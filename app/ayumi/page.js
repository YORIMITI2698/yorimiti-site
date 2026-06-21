'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'
import WashiBackground from '@/components/mv/WashiBackground'
import { DroneArt, PcArt, MicArt, HouseArt, CarArt, TreeArt, CloudArt } from '@/components/mv/RoadsideArt'

// よりみちの歩み — hidden history page, found by following the footprints.
const milestones = [
  {
    date: '2022.05',
    title: '創業',
    description: '薇苺すたじお活動\n映像制作・ボカロMVの編集を開始',
    Art: PcArt,
    float: true
  },
  {
    date: '2023.01',
    title: '合同会社GadgeTankerと提携',
    description: 'grid_FPV 合同会社でのアシスタント業務を開始',
    Art: DroneArt
  },
  {
    date: '2024.01',
    title: '合同会社BETAcreateの立ち上げに協力',
    description: '空撮業務の準備を開始',
    Art: HouseArt
  },
  {
    date: '2025.01',
    title: '合同会社BETAcreateから脱退',
    description: '空撮業務の開始',
    Art: DroneArt,
    float: true
  },
  {
    date: '2026.06',
    title: 'RE::Locus 立ち上げ',
    description: 'アニメーション制作×MIXでスムーズなボカロMVの作成が可能に',
    Art: MicArt
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

      {/* a car passing by on the road */}
      <div className="relative h-20 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-5 inset-x-0 h-[2px] trail-h opacity-60" />
        <span className="drive absolute bottom-6 text-fog/70">
          <CarArt />
        </span>
      </div>

      {/* Timeline road */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* roadside scenery */}
        <div className="absolute inset-0 pointer-events-none hidden md:block" aria-hidden="true">
          <TreeArt className="absolute top-[6%] left-[7%] text-fog/50" />
          <CloudArt className="absolute top-[3%] right-[12%] text-mute/40" />
          <TreeArt className="absolute top-[38%] right-[6%] text-fog/40 scale-75" />
          <CloudArt className="absolute top-[52%] left-[9%] text-mute/35 scale-90" />
          <CloudArt className="absolute top-[22%] left-[15%] text-mute/30 scale-75" />
          <TreeArt className="absolute top-[60%] right-[8%] text-fog/40 scale-75" />
          <TreeArt className="absolute top-[74%] left-[12%] text-fog/45 scale-90" />
          <CloudArt className="absolute top-[86%] right-[10%] text-mute/40" />
          <CloudArt className="absolute top-[92%] left-[16%] text-mute/30 scale-90" />
        </div>
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
                    <h3 className="font-disp text-base text-fog mb-2 tracking-wide">{m.title}</h3>
                    <p className="text-base text-fog leading-relaxed whitespace-pre-line">{m.description}</p>
                  </div>
                </div>

                {/* roadside illustration, opposite side */}
                <motion.div
                  className={`hidden sm:flex items-center justify-center row-start-1 ${
                    i % 2 === 0 ? 'sm:col-start-2 sm:pl-14' : 'sm:col-start-1 sm:pr-14'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  viewport={{ once: true, margin: '-80px' }}
                >
                  <span className={`text-fog/75 ${m.float ? 'bob' : ''}`}>
                    <m.Art />
                  </span>
                </motion.div>
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
