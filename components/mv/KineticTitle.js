'use client'

import { motion } from 'framer-motion'

// Lyric-style kinetic typography for section titles.
// Each section of the page is a "chapter" of the MV.
export default function KineticTitle({ text, chapter, className = '', align = 'center' }) {
  const letters = text.split('')
  const alignCls = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignCls} ${className}`}>
      {chapter && (
        <motion.span
          className="tc text-[10px] sm:text-xs text-acid tracking-[0.35em] mb-3"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-60px' }}
        >
          ▶ CHAPTER {chapter}
        </motion.span>
      )}
      <h2 className="overflow-hidden leading-none">
        <motion.span
          className="font-disp font-extrabold text-5xl md:text-7xl tracking-tight text-fog inline-flex"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ show: { transition: { staggerChildren: 0.04 } } }}
          aria-label={text}
        >
          {letters.map((l, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { y: '115%', rotate: 5, opacity: 0 },
                show: {
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              {l === ' ' ? ' ' : l}
            </motion.span>
          ))}
        </motion.span>
      </h2>
      <motion.div
        className={`h-[3px] bg-acid mt-4 ${align === 'left' ? '' : 'mx-auto'}`}
        initial={{ width: 0 }}
        whileInView={{ width: '3.5rem' }}
        transition={{ duration: 0.7, delay: 0.35 }}
        viewport={{ once: true, margin: '-60px' }}
      />
    </div>
  )
}
