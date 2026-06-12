'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Watercolor washes + drifting leaves on washi paper.
// Three layers of motion: breathing blobs, scroll parallax, falling leaves.
const blobs = [
  { c: 'rgba(107,142,15,0.17)', w: '46vw', h: '40vw', top: '-8%', left: '-10%', anim: 'washi1 13s', delay: '0s', layer: 0 },
  { c: 'rgba(167,211,33,0.14)', w: '38vw', h: '34vw', top: '30%', left: '62%', anim: 'washi2 16s', delay: '-4s', layer: 1 },
  { c: 'rgba(42,39,35,0.07)',  w: '30vw', h: '28vw', top: '58%', left: '8%',  anim: 'washi3 19s', delay: '-8s', layer: 0 },
  { c: 'rgba(194,69,31,0.08)', w: '24vw', h: '22vw', top: '6%',  left: '55%', anim: 'washi2 14s', delay: '-10s', layer: 1 },
  { c: 'rgba(107,142,15,0.11)', w: '34vw', h: '30vw', top: '70%', left: '60%', anim: 'washi1 17s', delay: '-2s', layer: 0 },
]

const leaves = [
  { left: '12%', dur: '13s', delay: '0s',  size: 13, sway: '5vw' },
  { left: '32%', dur: '17s', delay: '-6s', size: 10, sway: '-4vw' },
  { left: '55%', dur: '14s', delay: '-10s', size: 14, sway: '6vw' },
  { left: '72%', dur: '18s', delay: '-3s', size: 11, sway: '-5vw' },
  { left: '88%', dur: '15s', delay: '-12s', size: 12, sway: '4vw' },
  { left: '44%', dur: '20s', delay: '-15s', size: 9,  sway: '-6vw' },
]

function Leaf({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path
        d="M13.5 2.5C9 2.5 4.5 5 3 9.5 2.4 11.3 2.5 13 2.5 13.5c.5 0 2.2.1 4-.5C11 11.5 13.5 7 13.5 2.5Z"
        fill="rgba(107,142,15,0.5)"
      />
      <path d="M3.5 12.5C6 10 9.5 6.5 12.5 3.5" stroke="rgba(78,125,82,0.5)" strokeWidth="0.7" />
    </svg>
  )
}

export default function WashiBackground() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const ySlow = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const yFast = useTransform(scrollYProgress, [0, 1], ['-9%', '9%'])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* parallax layer: slow */}
      <motion.div className="absolute inset-0" style={{ y: ySlow }}>
        {blobs.filter((b) => b.layer === 0).map((b, i) => (
          <span
            key={i}
            className="washi-blob"
            style={{
              background: `radial-gradient(closest-side, ${b.c}, transparent 72%)`,
              width: b.w, height: b.h, top: b.top, left: b.left,
              animation: `${b.anim} ease-in-out infinite alternate`,
              animationDelay: b.delay,
            }}
          />
        ))}
      </motion.div>

      {/* parallax layer: counter-moving */}
      <motion.div className="absolute inset-0" style={{ y: yFast }}>
        {blobs.filter((b) => b.layer === 1).map((b, i) => (
          <span
            key={i}
            className="washi-blob"
            style={{
              background: `radial-gradient(closest-side, ${b.c}, transparent 72%)`,
              width: b.w, height: b.h, top: b.top, left: b.left,
              animation: `${b.anim} ease-in-out infinite alternate`,
              animationDelay: b.delay,
            }}
          />
        ))}
      </motion.div>

      {/* drifting leaves */}
      {leaves.map((l, i) => (
        <span
          key={i}
          className="leaf-fall"
          style={{
            left: l.left,
            animationDuration: l.dur,
            animationDelay: l.delay,
            '--sway': l.sway,
          }}
        >
          <span className="leaf-spin" style={{ animationDuration: `${4 + i}s` }}>
            <Leaf size={l.size} />
          </span>
        </span>
      ))}
    </div>
  )
}
