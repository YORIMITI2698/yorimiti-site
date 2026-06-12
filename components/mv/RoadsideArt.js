'use client'

// Hand-drawn roadside scenery for よりみちの歩み.
// Line-art in sumi ink with moss/vermilion accents.

export function DroneArt({ className = '' }) {
  return (
    <svg width="110" height="78" viewBox="0 0 110 78" fill="none" className={className}>
      {/* props */}
      <ellipse cx="22" cy="18" rx="18" ry="4" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="88" cy="18" rx="18" ry="4" stroke="currentColor" strokeWidth="2" />
      {/* arms */}
      <path d="M22 22 L44 34 M88 22 L66 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* body */}
      <rect x="42" y="30" width="26" height="14" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="55" cy="52" r="7" stroke="currentColor" strokeWidth="2" />
      <circle cx="55" cy="52" r="2.5" fill="#c2451f" />
      {/* downdraft */}
      <path d="M20 30 q2 6 -2 12 M26 30 q2 6 -2 12 M86 30 q2 6 -2 12 M92 30 q2 6 -2 12"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
      {/* hill below */}
      <path d="M8 72 Q 40 60 60 70 T 104 68" stroke="#6b8e0f" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6" opacity="0.7" />
    </svg>
  )
}

export function PcArt({ className = '' }) {
  return (
    <svg width="104" height="80" viewBox="0 0 104 80" fill="none" className={className}>
      {/* monitor */}
      <rect x="22" y="8" width="60" height="40" rx="4" stroke="currentColor" strokeWidth="2" />
      {/* waveform on screen */}
      <path d="M30 28 l6 0 3-8 4 14 4-10 3 4 6 0 3-6 4 9 3-3 6 0"
        stroke="#6b8e0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* stand */}
      <path d="M52 48 v8 M40 62 h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* pen tablet */}
      <rect x="8" y="64" width="34" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M58 70 l16 -8" stroke="#c2451f" strokeWidth="2" strokeLinecap="round" />
      <circle cx="76" cy="61" r="1.6" fill="#c2451f" />
    </svg>
  )
}

export function MicArt({ className = '' }) {
  return (
    <svg width="70" height="92" viewBox="0 0 70 92" fill="none" className={className}>
      {/* mic body */}
      <rect x="26" y="8" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="2" />
      <path d="M29 16 h12 M29 22 h12 M29 28 h12" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      {/* cradle */}
      <path d="M20 26 a15 15 0 0 0 30 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M35 41 v18" stroke="currentColor" strokeWidth="2" />
      <path d="M22 76 a13 6 0 0 1 26 0" stroke="currentColor" strokeWidth="2" />
      {/* notes */}
      <path d="M54 14 q4 -3 6 1 M58 24 q4 -3 6 1" stroke="#c2451f" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="53" cy="16" r="2" fill="#c2451f" />
      <circle cx="57" cy="26" r="2" fill="#c2451f" />
    </svg>
  )
}

export function HouseArt({ className = '' }) {
  return (
    <svg width="110" height="90" viewBox="0 0 110 90" fill="none" className={className}>
      {/* roof */}
      <path d="M20 44 L55 14 L90 44" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* chimney + smoke */}
      <path d="M74 30 v-10 h8 v17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="80" cy="10" r="3" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      <circle cx="87" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.4" opacity="0.3" />
      {/* body */}
      <path d="M26 44 v34 h58 v-34" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      {/* door */}
      <rect x="48" y="56" width="14" height="22" rx="2" stroke="#c2451f" strokeWidth="2" />
      <circle cx="59" cy="68" r="1.4" fill="#c2451f" />
      {/* window */}
      <circle cx="36" cy="56" r="6" stroke="currentColor" strokeWidth="2" />
      <path d="M30 56 h12 M36 50 v12" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      {/* bush */}
      <path d="M88 78 q4 -10 12 -6 M10 78 q6 -8 14 -4" stroke="#6b8e0f" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    </svg>
  )
}

export function CarArt({ className = '' }) {
  return (
    <svg width="120" height="56" viewBox="0 0 120 56" fill="none" className={className}>
      {/* body */}
      <path d="M14 38 q0 -10 10 -12 l8 -10 q2 -3 6 -3 h28 q4 0 6 3 l8 10 q14 1 14 12 l-2 4 h-78 z"
        stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      {/* windows */}
      <path d="M36 16 l-6 9 h18 v-9 z M52 16 v9 h16 l-7 -9 z" stroke="currentColor" strokeWidth="1.6" />
      {/* wheels */}
      <circle cx="36" cy="42" r="8" stroke="currentColor" strokeWidth="2.2" fill="#f6f2e8" />
      <circle cx="84" cy="42" r="8" stroke="currentColor" strokeWidth="2.2" fill="#f6f2e8" />
      <circle cx="36" cy="42" r="2.4" fill="#c2451f" />
      <circle cx="84" cy="42" r="2.4" fill="#c2451f" />
      {/* motion */}
      <path d="M2 26 h8 M0 34 h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function TreeArt({ className = '' }) {
  return (
    <svg width="48" height="72" viewBox="0 0 48 72" fill="none" className={className}>
      <path d="M24 70 v-22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M24 50 q-6 -4 -10 -1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="28" r="16" stroke="#6b8e0f" strokeWidth="2" />
      <circle cx="13" cy="38" r="9" stroke="#6b8e0f" strokeWidth="2" opacity="0.8" />
      <circle cx="35" cy="38" r="9" stroke="#6b8e0f" strokeWidth="2" opacity="0.8" />
    </svg>
  )
}

export function CloudArt({ className = '' }) {
  return (
    <svg width="84" height="34" viewBox="0 0 84 34" fill="none" className={className}>
      <path d="M14 28 a10 10 0 0 1 4 -19 a13 13 0 0 1 24 -5 a11 11 0 0 1 18 4 a9 9 0 0 1 8 20 z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}
