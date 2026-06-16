'use client'

import Link from 'next/link'

// 高札 / 道標 — an old wooden roadside signpost.
// Used site-wide (in the Footer) as the navigation, styled like weathered wood.
const DEFAULT_SIGNS = [
  { name: 'HOME', href: '/', dir: 'left' },
  { name: 'SERVICES', href: '/services', dir: 'right' },
  { name: 'WORKS', href: '/works', dir: 'left' },
  { name: 'CONTACT', href: '/#contact', dir: 'right' },
]

const WOOD = 'linear-gradient(180deg, #9a774b 0%, #855f37 48%, #6f4d2a 100%)'
const WOOD_DARK = 'linear-gradient(180deg, #4a3a2a 0%, #3c2f22 48%, #2e2318 100%)'

export default function Kosatsu({ signs = DEFAULT_SIGNS, className = '' }) {
  return (
    <div className={`relative inline-flex flex-col items-center ${className}`} aria-label="道標">
      {/* little roof cap */}
      <span
        className="block w-16 h-3 rounded-t-sm shadow-sm"
        style={{ background: WOOD_DARK, clipPath: 'polygon(8% 0, 92% 0, 100% 100%, 0 100%)' }}
      />

      {/* planks hang off a central post */}
      <div className="relative flex flex-col items-center gap-2.5 py-2">
        {/* the post */}
        <span
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-3 rounded-sm kosatsu-post"
        />

        {signs.map((s, i) => (
          <Link
            key={s.name}
            href={s.href}
            className={`kosatsu-plank group relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-[3px] text-[11px] tracking-[0.2em] text-[#f6efdf] hover:brightness-110 transition ${
              s.dir === 'left' ? 'self-start sm:-translate-x-2' : 'self-end sm:translate-x-2'
            }`}
          >
            {s.dir === 'left' && <span className="text-[#f2d9a0] group-hover:-translate-x-0.5 transition-transform">‹</span>}
            <span className="font-light">{s.name}</span>
            {s.dir === 'right' && <span className="text-[#f2d9a0] group-hover:translate-x-0.5 transition-transform">›</span>}
          </Link>
        ))}
      </div>

      {/* nail head */}
      <span className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black/30" />
    </div>
  )
}
