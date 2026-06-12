'use client'

import { motion } from 'framer-motion'

const KANJI = { '01': '其の一', '02': '其の二', '03': '其の三', '04': '其の四' }

// v2: section titles as roadside signposts along the yorimichi trail.
export default function KineticTitle({ text, chapter, className = '', align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {chapter && (
        <motion.span
          className="tc text-[11px] sm:text-xs text-beni tracking-[0.4em] mb-4"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          − 寄り道 {KANJI[chapter] || chapter} −
        </motion.span>
      )}
      <motion.h2
        className="font-disp font-light text-5xl md:text-7xl tracking-[0.12em] text-fog leading-none"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: '-60px' }}
      >
        {text}
      </motion.h2>
      {/* hand-drawn winding path underline */}
      <motion.svg
        width="140" height="14" viewBox="0 0 140 14" fill="none"
        className={`mt-5 ${align === 'left' ? '' : 'mx-auto'}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        <motion.path
          d="M2 10 C 25 2, 45 13, 70 7 S 115 3, 138 8"
          stroke="#6b8e0f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="7 6"
          variants={{
            hidden: { pathLength: 0, opacity: 0 },
            show: { pathLength: 1, opacity: 1, transition: { duration: 1.1, delay: 0.3, ease: 'easeInOut' } },
          }}
        />
      </motion.svg>
    </div>
  )
}
