'use client'

import Link from 'next/link'

// Hidden element (day only): someone's footprints near the road.
// Follow them to よりみちの歩み.
const steps = [
  { x: 0,  y: 64, r: -18, side: 0 },
  { x: 18, y: 48, r: -10, side: 1 },
  { x: 30, y: 30, r: -2,  side: 0 },
  { x: 48, y: 16, r: 8,   side: 1 },
  { x: 62, y: 0,  r: 16,  side: 0 },
]

function Foot({ flip }) {
  return (
    <svg width="11" height="18" viewBox="0 0 20 32" fill="currentColor" style={{ transform: flip ? 'scaleX(-1)' : undefined }}>
      <ellipse cx="10" cy="11" rx="6" ry="9.5" />
      <ellipse cx="10" cy="26.5" rx="4.5" ry="4" />
    </svg>
  )
}

export default function Footprints() {
  return (
    <Link
      href="/ayumi"
      aria-label="あしあとをたどる — よりみちの歩みへ"
      title="あしあとをたどる"
      className="dark:hidden group absolute left-[8%] bottom-[14%] w-28 h-24 text-mute/50 hover:text-mute transition-colors cursor-pointer"
    >
      {steps.map((s, i) => (
        <span
          key={i}
          className="absolute footstep"
          style={{ left: s.x, top: s.y, transform: `rotate(${s.r}deg)`, animationDelay: `${i * 0.35}s` }}
        >
          <Foot flip={s.side === 1} />
        </span>
      ))}
      <span className="absolute -top-5 left-10 tc text-[10px] tracking-[0.25em] text-beni opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        あしあとを たどる…?
      </span>
    </Link>
  )
}
