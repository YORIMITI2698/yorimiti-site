'use client'

import Link from 'next/link'

export default function HomeContactLink() {
  return (
    <section className="relative py-16 px-4 bg-[#333333]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
          お問い合わせ
        </h2>
        <p className="text-white font-light text-base mb-8 max-w-2xl mx-auto">
          ご質問やご相談がありましたら、お気軽にお問い合わせください。
        </p>
        <Link
          href="/#contact"
          className="inline-block px-8 py-3 border-2 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all"
        >
          お問い合わせ
        </Link>
      </div>
    </section>
  )
}
