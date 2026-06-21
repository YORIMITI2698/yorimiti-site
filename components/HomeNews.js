'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// NEWS — recent activity from a Google Sheet (server-side via /api/news),
// shown with photos, framed like a washi-taped note.
export default function HomeNews() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/news')
      .then((r) => r.json())
      .then((d) => { if (d?.items) setItems(d.items) })
      .catch(() => {})
  }, [])

  return (
    <motion.div
      className="relative w-[300px] max-w-full shrink-0"
      initial={{ opacity: 0, y: 18, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="relative bg-white shadow-[0_10px_26px_rgba(42,39,35,0.16)] rounded-sm p-3">
        <span className="tape -top-3 left-7 rotate-[-6deg]" />
        <span className="tape -top-3 right-7 rotate-[5deg]" />

        {/* header */}
        <div className="flex items-baseline gap-2 pb-3 mb-3 border-b border-line">
          <span className="font-disp text-base tracking-[0.2em] text-fog">NEWS</span>
          <span className="tc text-[10px] text-mute tracking-[0.2em]">よりみちの、いま</span>
        </div>

        {items.length > 0 ? (
          <div className="space-y-4 max-h-[420px] overflow-y-auto pr-1">
            {items.map((n, i) => {
              const inner = (
                <>
                  {n.image && (
                    <img src={n.image} alt={n.title || ''} className="w-full rounded-sm object-cover mb-2" loading="lazy" />
                  )}
                  {n.date && <p className="tc text-[10px] text-beni tracking-[0.25em] mb-1">{n.date}</p>}
                  {n.title && <p className="text-[13px] font-medium text-fog leading-snug mb-1">{n.title}</p>}
                  {n.body && <p className="text-[11px] text-mute leading-relaxed whitespace-pre-line">{n.body}</p>}
                </>
              )
              return n.link ? (
                <a key={i} href={n.link} target="_blank" rel="noopener noreferrer" className="block group">
                  {inner}
                  {i < items.length - 1 && <span className="block border-b border-line mt-4" />}
                </a>
              ) : (
                <div key={i}>
                  {inner}
                  {i < items.length - 1 && <span className="block border-b border-line mt-4" />}
                </div>
              )
            })}
          </div>
        ) : (
          <p className="text-center text-[11px] text-mute py-8">準備中…</p>
        )}
      </div>
    </motion.div>
  )
}
