'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// X (Twitter) note. The profile (avatar/name/bio) is fetched server-side via
// /api/x-profile so it ALWAYS renders real data. The live tweet timeline is
// layered below as a progressive enhancement when X's widget script loads.
export default function HomeNews() {
  const ref = useRef(null)
  const [p, setP] = useState(null)

  useEffect(() => {
    fetch('/api/x-profile')
      .then((r) => r.json())
      .then((d) => { if (d && !d.error) setP(d) })
      .catch(() => {})
  }, [])

  useEffect(() => {
    const render = () => window.twttr?.widgets?.load?.(ref.current)
    const id = 'twitter-wjs'
    if (document.getElementById(id)) { render(); return }
    const sc = document.createElement('script')
    sc.id = id
    sc.src = 'https://platform.twitter.com/widgets.js'
    sc.async = true
    sc.charset = 'utf-8'
    sc.onload = render
    document.body.appendChild(sc)
  }, [])

  return (
    <motion.div
      className="relative w-[300px] max-w-full shrink-0"
      initial={{ opacity: 0, y: 18, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="relative bg-white shadow-[0_10px_26px_rgba(42,39,35,0.16)] rounded-sm p-2.5">
        {/* washi tape */}
        <span className="tape -top-3 left-7 rotate-[-6deg]" />
        <span className="tape -top-3 right-7 rotate-[5deg]" />

        {/* profile header (real data from /api/x-profile) */}
        <a
          href={p?.url || 'https://x.com/KotaUehara2698'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-1 pt-1 pb-3 group"
        >
          {p?.avatar ? (
            <img src={p.avatar} alt={p.name || 'X'} className="w-9 h-9 rounded-full object-cover shrink-0" />
          ) : (
            <span className="w-9 h-9 rounded-full bg-panel shrink-0" />
          )}
          <span className="min-w-0">
            <span className="block text-sm font-medium text-fog leading-tight truncate group-hover:text-beni transition-colors">
              {p?.name || 'YORIMITI'}
            </span>
            <span className="block tc text-[10px] text-mute tracking-wide truncate">@{p?.screenName || 'KotaUehara2698'}</span>
          </span>
          <svg viewBox="0 0 24 24" className="w-4 h-4 ml-auto shrink-0 text-fog" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {p?.description && (
          <p className="px-1 pb-3 text-[11px] text-mute leading-relaxed border-b border-line">
            {p.description}
          </p>
        )}

        {/* live timeline (enhances when widgets.js loads) */}
        <div ref={ref} className="rounded-sm overflow-hidden bg-panel mt-2">
          <a
            className="twitter-timeline"
            data-height="320"
            data-width="276"
            data-theme="light"
            data-chrome="noheader nofooter noborders transparent"
            data-dnt="true"
            href="https://twitter.com/KotaUehara2698?ref_src=twsrc%5Etfw"
          >
            最新の投稿を X (@KotaUehara2698) で見る →
          </a>
        </div>

        <p className="text-center tc text-[10px] text-mute tracking-[0.2em] pt-2">よりみちの、いま</p>
      </div>
    </motion.div>
  )
}
