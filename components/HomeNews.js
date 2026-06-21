'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Small X (Twitter) feed, framed like a washi-taped note. Embedded inline
// (no section wrapper) so it can sit in the HOME→WORKS seam as a decoration.
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
      <div className="relative bg-white p-2 pb-4 shadow-[0_10px_26px_rgba(42,39,35,0.16)] rounded-sm">
        <span className="tape -top-3 left-7 rotate-[-6deg]" />
        <span className="tape -top-3 right-7 rotate-[5deg]" />
        <div ref={ref} className="rounded-sm overflow-hidden bg-panel min-h-[320px]">
          <a
            className="twitter-timeline"
            data-height="340"
            data-width="270"
            data-theme="light"
            data-chrome="noheader nofooter noborders transparent"
            data-dnt="true"
            href="https://twitter.com/KotaUehara2698?ref_src=twsrc%5Etfw"
          >
            Tweets by KotaUehara2698
          </a>
        </div>
        <p className="absolute bottom-1 left-0 right-0 text-center tc text-[10px] text-mute tracking-[0.2em]">
          よりみちの、いま
        </p>
      </div>
    </motion.div>
  )
}
