'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomeContactLink() {
  return (
    <section className="relative py-16 px-4 bg-ink border-b border-line">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          className="text-fog/90 font-light text-base mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ご質問やご相談がありましたら、お気軽にお問い合わせください。
        </motion.p>
        <Link
          href="/#contact"
          className="group relative inline-block px-8 py-3 border border-acid text-acid text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink"
        >
          <span className="absolute inset-0 bg-acid origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          <span className="relative">お問い合わせ</span>
        </Link>
      </div>
    </section>
  )
}
