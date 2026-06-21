'use client'

import Link from 'next/link'

// 夜のよりみち: moon, a passing crow, falling feathers, twinkling stars.
// Rendered only when the night theme is active (html.dark).
const feathers = [
  { left: '15%', dur: '15s', delay: '0s',  sway: '4vw' },
  { left: '38%', dur: '19s', delay: '-7s', sway: '-5vw' },
  { left: '60%', dur: '16s', delay: '-11s', sway: '5vw' },
  { left: '78%', dur: '21s', delay: '-4s', sway: '-4vw' },
  { left: '90%', dur: '17s', delay: '-14s', sway: '3vw' },
]

const stars = [
  { top: '8%', left: '22%', d: '2.6s', delay: '0s' },
  { top: '14%', left: '48%', d: '3.4s', delay: '-1s' },
  { top: '6%', left: '70%', d: '2.9s', delay: '-2s' },
  { top: '22%', left: '84%', d: '3.8s', delay: '-0.5s' },
  { top: '18%', left: '8%', d: '3.1s', delay: '-1.6s' },
  { top: '28%', left: '60%', d: '2.7s', delay: '-2.4s' },
  { top: '10%', left: '35%', d: '4s', delay: '-3s' },
  { top: '25%', left: '30%', d: '3.5s', delay: '-1.2s' },
]

export default function NightScene() {
  return (
    <>
      {/* moon — part of the sky background: stays at the top of the page and
          scrolls away (anchored to <main>, not the viewport) */}
      <div className="hidden dark:block absolute top-0 inset-x-0 h-screen -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <Link
          href="/moon"
          aria-label="月へよりみち"
          title="月へよりみち"
          className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full pointer-events-auto cursor-pointer transition-transform duration-500 hover:scale-105 block"
          style={{
            background: 'radial-gradient(circle at 38% 38%, #f6ecd0, #e3c567 60%, rgba(227,197,103,0) 75%)',
            boxShadow: '0 0 120px 40px rgba(227,197,103,0.18)',
          }}
        />
      </div>

    <div className="hidden dark:block fixed inset-0 z-30 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* stars */}
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{ top: s.top, left: s.left, animationDuration: s.d, animationDelay: s.delay }}
        />
      ))}

      {/* crow gliding across */}
      <span className="crow-fly absolute">
        <svg width="58" height="34" viewBox="0 0 58 34" fill="none">
          <path
            d="M3 15 C 11 7, 19 5, 25 9 C 28 4, 34 1, 39 3 C 36 7, 34 10, 34 13 C 41 12, 49 15, 55 21 C 47 20, 41 21, 37 23 C 35 28, 31 32, 25 33 C 27 29, 28 26, 27 23 C 19 25, 11 23, 3 15 Z"
            fill="#2b3147"
          />
          <circle cx="37" cy="7" r="1" fill="#e3c567" />
        </svg>
      </span>

      {/* falling feathers (reuses leaf fall motion) */}
      {feathers.map((f, i) => (
        <span
          key={i}
          className="leaf-fall"
          style={{ left: f.left, animationDuration: f.dur, animationDelay: f.delay, '--sway': f.sway }}
        >
          <span className="leaf-spin" style={{ animationDuration: `${5 + i}s` }}>
            <svg width="13" height="21" viewBox="0 0 14 22" fill="none">
              <path d="M7 1 C 11.5 5.5, 13 12, 7 21 C 1 12, 2.5 5.5, 7 1 Z" fill="rgba(57,64,90,0.9)" />
              <path d="M7 2.5 L 7 19.5" stroke="rgba(227,197,103,0.4)" strokeWidth="0.6" />
            </svg>
          </span>
        </span>
      ))}
    </div>
    </>
  )
}
