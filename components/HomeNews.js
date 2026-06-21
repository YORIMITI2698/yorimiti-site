'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import KineticTitle from '@/components/mv/KineticTitle'

// NEWS — the latest from YORIMITI's X (Twitter), framed like a washi-taped note.
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
    <section className="relative py-32 px-4 bg-ink dark:bg-[#171a26]">
      <div className="max-w-2xl mx-auto">
        <KineticTitle text="NEWS" className="mb-14" />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1.1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white p-3 pb-8 shadow-[0_14px_40px_rgba(42,39,35,0.18)] rounded-sm">
            {/* washi tape */}
            <span className="tape -top-3 left-12 rotate-[-5deg]" />
            <span className="tape -top-3 right-12 rotate-[4deg]" />

            <div
              ref={ref}
              className="rounded-sm overflow-hidden bg-panel min-h-[480px]"
            >
              <a
                className="twitter-timeline"
                data-height="540"
                data-theme="light"
                data-chrome="noheader nofooter transparent noborders"
                data-dnt="true"
                href="https://twitter.com/KotaUehara2698?ref_src=twsrc%5Etfw"
              >
                Tweets by KotaUehara2698
              </a>
            </div>

            {/* caption */}
            <p className="absolute bottom-2.5 left-0 right-0 text-center tc text-[11px] text-mute tracking-[0.2em]">
              よりみちの、いま
            </p>
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="https://x.com/KotaUehara2698"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-8 py-3 border border-fog/60 dark:border-[#e8e6df]/60 text-fog dark:text-[#e8e6df] text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink dark:hover:text-[#171a26]"
          >
            <span className="absolute inset-0 bg-fog dark:bg-[#e8e6df] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="relative">Xでフォロー</span>
          </a>
        </div>
      </div>
    </section>
  )
}
