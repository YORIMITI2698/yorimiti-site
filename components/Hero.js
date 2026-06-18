'use client'

import { motion } from 'framer-motion'
import Footprints from '@/components/mv/Footprints'

// v2: the journey begins. Video untouched, framed as a picture postcard on paper.
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-ink dark:bg-[#171a26] flex items-center justify-center overflow-hidden pt-24 pb-20 px-4">
      {/* faint winding road in the background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.18]"
        viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none"
      >
        <path
          d="M-50 700 C 200 620, 280 420, 520 480 S 900 640, 1250 380"
          className="hero-road" stroke="#79715f" strokeWidth="3" strokeDasharray="14 12" strokeLinecap="round"
        />
      </svg>

      <div className="relative max-w-6xl w-full mx-auto grid md:grid-cols-[auto,1fr] gap-10 md:gap-16 items-center">
        {/* Vertical title */}
        <motion.div
          className="flex flex-row-reverse md:flex-row items-start justify-center gap-5 md:pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* owl-silhouette stamp (mask of the logo) */}
          <span
            className="mt-2 w-11 h-11 shrink-0 bg-fog dark:bg-[#e8e6df] -rotate-6 opacity-90"
            style={{
              WebkitMaskImage: 'url(/yorimiti-logo.png)',
              maskImage: 'url(/yorimiti-logo.png)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="v-text font-disp font-light text-6xl sm:text-7xl text-fog dark:text-[#e8e6df] leading-tight">
            よりみち
          </div>
          <div className="v-text tc text-[11px] text-mute dark:text-[#9aa0b0] tracking-[0.4em] pt-3">
            もっと自由な形でもっと自由な視点を
          </div>
        </motion.div>

        {/* Postcard video */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 1.2 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative bg-white p-3 pb-12 shadow-[0_14px_40px_rgba(42,39,35,0.18)] rounded-sm">
            {/* washi tape */}
            <span className="tape -top-3 left-10 rotate-[-5deg]" />
            <span className="tape -top-3 right-10 rotate-[4deg]" />

            <div className="relative aspect-video overflow-hidden rounded-sm bg-panel">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/hero-bg.mp4" type="video/mp4" />
              </video>
            </div>

            {/* postcard caption */}
            <p className="absolute bottom-4 left-0 right-0 text-center tc text-[11px] text-mute tracking-[0.2em]">
              ドローン空撮 ・ アニメーション
            </p>
          </div>
        </motion.div>
      </div>

      {/* hidden: someone's footprints (day only) */}
      <Footprints />

      {/* scroll cue */}
      <motion.div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-beni dark:text-[#e3c567] text-sm bob">↓</span>
      </motion.div>
    </section>
  )
}
