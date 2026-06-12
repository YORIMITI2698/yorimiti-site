'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

// v2: the page is a walking trail. Scroll position = where you are on the road.
export default function Seekbar() {
  const { scrollYProgress } = useScroll()
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 })
  const left = useTransform(smooth, [0, 1], ['0%', '100%'])
  const [pct, setPct] = useState(0)

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setPct(Math.round(v * 100)))
  }, [scrollYProgress])

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none select-none">
      <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6 h-11 bg-ink/90 backdrop-blur-md border-t border-line">
        <span className="tc text-[10px] text-mute tracking-[0.25em] shrink-0">出発</span>

        {/* dashed road */}
        <div className="relative flex-1 h-3">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] trail-h" />
          {/* walked part */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-beni origin-left"
            style={{ scaleX: smooth, width: '100%' }}
          />
          {/* current position marker */}
          <motion.div className="absolute top-1/2 -translate-y-1/2 -ml-1.5" style={{ left }}>
            <span className="block w-3 h-3 rounded-full bg-beni border-2 border-ink shadow" />
          </motion.div>
        </div>

        <span className="tc text-[10px] text-mute tracking-[0.25em] shrink-0">ゴール</span>
        <span className="tc text-[10px] text-beni shrink-0 hidden sm:inline">
          道のり {pct}%
        </span>
      </div>
    </div>
  )
}
