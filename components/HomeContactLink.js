'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import HomeNews from '@/components/HomeNews'

export default function HomeContactLink() {
  return (
    <section className="relative py-16 px-4 bg-ink dark:bg-[#171a26] border-b border-line dark:border-[#343a4d]">
      <div className="max-w-7xl mx-auto relative">
        {/* centered contact prompt */}
        <div className="text-center max-w-2xl mx-auto">
          <motion.p
            className="text-fog/90 dark:text-[#e8e6df]/90 font-light text-base mb-8"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            ご質問やご相談がありましたら、お気軽にお問い合わせください。
          </motion.p>
          <Link
            href="/#contact"
            className="group relative inline-block px-8 py-3 border border-beni dark:border-[#e3c567] text-beni dark:text-[#e3c567] text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink dark:hover:text-[#171a26]"
          >
            <span className="absolute inset-0 bg-beni dark:bg-[#e3c567] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="relative">お問い合わせ</span>
          </Link>
        </div>

        {/* X feed: decoration pinned to the right (doesn't affect centering) */}
        <div className="flex justify-center mt-12 md:mt-0 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2">
          <HomeNews />
        </div>
      </div>
    </section>
  )
}
