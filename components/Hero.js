'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// HOME = the MV player itself. Video untouched; chrome overlaid like a shoot monitor.
export default function Hero() {
  const ref = useRef(null)
  const tcRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const chromeOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  // Running SMPTE-style timecode (writes to DOM directly, no re-renders)
  useEffect(() => {
    const start = performance.now()
    let raf
    const tick = (now) => {
      const t = (now - start) / 1000
      const h = String(Math.floor(t / 3600)).padStart(2, '0')
      const m = String(Math.floor((t % 3600) / 60)).padStart(2, '0')
      const s = String(Math.floor(t % 60)).padStart(2, '0')
      const f = String(Math.floor((t % 1) * 24)).padStart(2, '0')
      if (tcRef.current) tcRef.current.textContent = `${h}:${m}:${s}:${f}`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink scanlines">
      {/* Background Video */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        style={{ scale: videoScale }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      {/* === Monitor chrome === */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ opacity: chromeOpacity }}>
        {/* corner brackets */}
        {[
          'top-6 left-6 border-t-2 border-l-2',
          'top-6 right-6 border-t-2 border-r-2',
          'bottom-20 left-6 border-b-2 border-l-2',
          'bottom-20 right-6 border-b-2 border-r-2',
        ].map((pos, i) => (
          <div key={i} className={`absolute w-8 h-8 border-white/60 ${pos}`} />
        ))}

        {/* REC + timecode */}
        <div className="absolute top-8 left-12 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 blink" />
          <span className="tc text-xs text-white/80 tracking-[0.25em]">REC</span>
        </div>
        <div className="absolute top-8 right-12">
          <span ref={tcRef} className="tc text-xs text-white/80">00:00:00:00</span>
        </div>

        {/* MV title card (player-style, bottom-left) */}
        <motion.div
          className="absolute bottom-28 left-6 sm:left-12"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="tc text-[10px] text-acid tracking-[0.35em] mb-2">▶ NOW PLAYING</p>
          <h1 className="font-disp font-extrabold text-3xl sm:text-5xl text-white leading-tight drop-shadow-lg">
            YORIMITI
          </h1>
          <p className="text-xs sm:text-sm text-white/70 mt-2 font-light tracking-wider">
            ボカロMV編集 × 動画制作 × アニメーション
          </p>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          className="absolute bottom-16 right-6 sm:right-12 flex items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="tc text-[10px] text-white/60 tracking-[0.3em]">SCROLL TO PLAY</span>
          <span className="text-acid text-xs">▼</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
