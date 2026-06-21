'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Small X (Twitter) feed framed like a washi-taped note.
// Always shows a header + link; the live timeline fills in below if the
// X widget script loads in the browser.
export default function HomeNews() {
  const ref = useRef(null)

  useEffect(() => {
    const render = () => window.twttr?.widgets?.load?.(ref.current)
    const id = 'twitter-wjs'
    if (document.getElementById(id)) {
      render()
      return
    }
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
      className="relative w-[290px] max-w-full shrink-0"
      initial={{ opacity: 0, y: 18, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="relative bg-white shadow-[0_10px_26px_rgba(42,39,35,0.16)] rounded-sm p-2.5">
        {/* washi tape */}
        <span className="tape -top-3 left-7 rotate-[-6deg]" />
        <span className="tape -top-3 right-7 rotate-[5deg]" />

        {/* always-visible header (also the link) */}
        <a
          href="https://x.com/KotaUehara2698"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-1 pb-2 text-fog hover:text-beni transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <span className="text-xs font-medium tracking-wide">@KotaUehara2698</span>
          <span className="ml-auto tc text-[10px] text-mute tracking-[0.15em]">よりみちの、いま</span>
        </a>

        {/* live timeline (enhances if widgets.js loads) */}
        <div ref={ref} className="rounded-sm overflow-hidden bg-panel">
          <a
            className="twitter-timeline"
            data-height="340"
            data-width="268"
            data-theme="light"
            data-chrome="noheader nofooter noborders transparent"
            data-dnt="true"
            href="https://twitter.com/KotaUehara2698?ref_src=twsrc%5Etfw"
          >
            最新の投稿を X (@KotaUehara2698) で見る →
          </a>
        </div>
      </div>
    </motion.div>
  )
}
