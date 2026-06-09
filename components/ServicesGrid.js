'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesGrid() {
  const services = [
    {
      number: '01',
      title: 'Drone Operation',
      description: '安定型ドローンとFPVドローンで、最大8Kの高品質空撮を実現。安全管理を徹底した撮影プランを提案します。',
      tags: ['4K/8K', 'FPV', '安全第一'],
      color: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      number: '02',
      title: 'Shooting / Editing',
      description: '高品質撮影から動画編集・カラーグレーディング。ロケーション撮影にも対応します。',
      tags: ['撮影', '編集', 'グレーディング'],
      color: 'from-purple-500/10 to-pink-500/10'
    },
    {
      number: '03',
      title: 'RE::Locus / Motion | MIX',
      description: 'ボカロMVをはじめとしたMotionGraphic制作と、楽曲のMIX・マスタリングを提供。',
      tags: ['アニメーション', 'MIX', 'マスタリング'],
      color: 'from-green-500/10 to-emerald-500/10'
    }
  ]

  return (
    <section className="relative py-32 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-wider">
            Our Services
          </h2>
          <p className="text-text-secondary font-light text-lg max-w-3xl mx-auto">
            映像制作からグラフィックデザイン、音声制作まで。
            YORIMITIは、あなたの想いを形にするクリエイティブチームです。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href="/services">
                <div className={`h-full p-8 rounded-xl border border-dark-highlight bg-gradient-to-br ${service.color} backdrop-blur hover:border-white transition-all duration-300 cursor-pointer`}>
                  {/* Number */}
                  <div className="text-6xl font-light text-white/20 group-hover:text-white/40 transition-colors mb-4">
                    {service.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary font-light text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-light text-white/60 bg-white/5 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <span className="inline-flex items-center text-white text-sm font-light group-hover:gap-2 transition-all gap-1">
                    詳しく見る
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 border-2 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all"
          >
            ALL SERVICES
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
