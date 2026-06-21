'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'
import WashiBackground from '@/components/mv/WashiBackground'

// NEWS archive — all entries from the Google Sheet (via /api/news).
export default function News() {
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('/api/news', { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => setItems(d?.items || []))
      .catch(() => setItems([]))
  }, [])

  return (
    <main className="bg-ink min-h-screen">
      <Navbar />

      {/* Title */}
      <section className="pt-36 pb-12 px-4 text-center relative overflow-hidden">
        <WashiBackground />
        <motion.p
          className="tc text-[11px] sm:text-xs text-beni tracking-[0.4em] mb-4 relative"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          − よりみちの、いま −
        </motion.p>
        <motion.h1
          className="font-disp font-light text-5xl md:text-7xl tracking-[0.12em] text-fog relative"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          NEWS
        </motion.h1>
      </section>

      {/* List */}
      <section className="relative py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {items === null ? (
            <p className="text-center text-sm text-mute py-12">読み込み中…</p>
          ) : items.length === 0 ? (
            <p className="text-center text-sm text-mute py-12">準備中です。</p>
          ) : (
            <div className="space-y-10">
              {items.map((n, i) => {
                const card = (
                  <div className="bg-white border border-line rounded-sm overflow-hidden shadow-[0_6px_20px_rgba(42,39,35,0.08)] transition-all group-hover:shadow-[0_12px_30px_rgba(42,39,35,0.14)] grid md:grid-cols-2">
                    {n.image && (
                      <div className="bg-panel">
                        <img src={n.image} alt={n.title || ''} className="w-full h-full object-cover min-h-[200px]" loading="lazy" onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }} />
                      </div>
                    )}
                    <div className={`p-7 ${n.image ? '' : 'md:col-span-2'}`}>
                      {n.date && <p className="tc text-[11px] text-beni tracking-[0.3em] mb-3">{n.date}</p>}
                      {n.title && <h2 className="font-disp text-xl text-fog mb-3 tracking-wide leading-snug">{n.title}</h2>}
                      {n.body && <p className="text-sm text-fog/85 leading-loose whitespace-pre-line">{n.body}</p>}
                    </div>
                  </div>
                )
                return (
                  <motion.div
                    key={i}
                    className="group"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: '-60px' }}
                  >
                    {n.link ? (
                      <a href={n.link} target="_blank" rel="noopener noreferrer" className="block">{card}</a>
                    ) : (
                      card
                    )}
                  </motion.div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <Seekbar />
    </main>
  )
}
