'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

// X (Twitter) note. Profile + tweets are fetched server-side (reliable, not
// dependent on the browser loading X's widget). Tweets come from /api/x-tweets
// (configure the IDs in pages/api/x-tweets.js).
export default function HomeNews() {
  const [p, setP] = useState(null)
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    fetch('/api/x-profile').then((r) => r.json()).then((d) => { if (d && !d.error) setP(d) }).catch(() => {})
    fetch('/api/x-tweets').then((r) => r.json()).then((d) => { if (d?.tweets) setTweets(d.tweets) }).catch(() => {})
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

        {/* profile header */}
        <a
          href={p?.url || 'https://x.com/KotaUehara2698'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 pb-3 mb-3 border-b border-line group"
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

        {/* tweets (server-side, reliable) */}
        {tweets.length > 0 ? (
          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            {tweets.map((t) => (
              <a
                key={t.id}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-sm border border-line p-2.5 hover:border-beni transition-colors"
              >
                <p className="text-[12px] text-fog leading-relaxed whitespace-pre-line">{t.text}</p>
                {t.photos?.[0] && (
                  <img src={t.photos[0]} alt="" className="mt-2 w-full rounded-sm object-cover" />
                )}
              </a>
            ))}
          </div>
        ) : (
          <a
            href="https://x.com/KotaUehara2698"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-sm border border-line py-6 px-3 text-[12px] text-mute hover:border-beni hover:text-beni transition-colors"
          >
            最新の投稿を X で見る →
          </a>
        )}

        <p className="text-center tc text-[10px] text-mute tracking-[0.2em] pt-3">よりみちの、いま</p>
      </div>
    </motion.div>
  )
}
