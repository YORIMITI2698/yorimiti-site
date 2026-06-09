'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="relative py-32 px-4 bg-dark-bg border-y border-dark-highlight">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-wider">
              About YORIMITI
            </h2>
            <div className="space-y-6 text-text-secondary font-light leading-relaxed">
              <p>
                YORIMITIは、映像制作・グラフィックデザイン・音声制作を統合するクリエイティブスタジオです。
              </p>
              <p>
                フクロウが「福を囲む鳥」と呼ばれるように、私たちも依頼者とともに福を広げていきたい。
              </p>
              <p>
                ロゴの黒は確固たる存在を、明るい背景は支えてくださる方々への感謝を象徴しています。
              </p>
              <p className="pt-4">
                私たちは、どんな時も頼れる存在でありたい。
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-8 px-8 py-3 border-2 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { title: 'Integrated Creative', desc: '映像からグラフィック、音声まで。あらゆるクリエイティブを一貫してサポート' },
              { title: 'Professional Team', desc: 'ドローン操縦士、グラフィックデザイナー、音声エンジニアが一堂に集結' },
              { title: 'Quality First', desc: '安全管理と品質を最優先に。納期と予算を守りながら最高のクオリティを実現' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 border border-dark-highlight rounded-lg hover:border-white transition-all"
                whileHover={{ borderColor: '#ffffff' }}
              >
                <h3 className="text-lg font-light text-white mb-2">{item.title}</h3>
                <p className="text-text-secondary font-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
