'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

// The whole page is one music video: scroll position = playhead.
const DURATION = 237 // 3:57

function fmt(t) {
  const m = Math.floor(t / 60)
  const s = Math.floor(t % 60)
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function Seekbar({ title = 'YORIMITI — Official Site' }) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 })
  const [time, setTime] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setTime(v * DURATION))
  }, [scrollYProgress])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none select-none">
      {/* progress track */}
      <div className="relative h-[3px] bg-white/10">
        <motion.div
          className="absolute inset-y-0 left-0 right-0 bg-acid origin-left"
          style={{ scaleX }}
        />
      </div>
      {/* player chrome */}
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 h-9 bg-[#101216]/85 backdrop-blur-md border-t border-line">
        <div className="flex items-center gap-3 min-w-0">
          <svg className="w-3 h-3 text-acid shrink-0" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2 1l9 5-9 5V1z" />
          </svg>
          <span className="tc text-[10px] text-mute shrink-0">
            {fmt(time)} <span className="text-white/25">/</span> {fmt(DURATION)}
          </span>
          <span className="hidden sm:block tc text-[10px] text-white/35 truncate tracking-[0.2em] uppercase">
            ▸ Now Playing : {title}
          </span>
        </div>
        <span className="tc text-[10px] text-white/25 shrink-0 hidden md:block">
          SCROLL = SEEK
        </span>
      </div>
    </div>
  )
}
