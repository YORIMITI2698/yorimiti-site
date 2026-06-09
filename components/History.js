'use client'

import { motion } from 'framer-motion'

export default function History() {
  const milestones = [
    {
      date: '2023.04',
      title: '創業',
      description: 'ドローン空撮・映像制作事業を開始'
    },
    {
      date: '2024.01',
      title: 'RE::Locus 立ち上げ',
      description: 'グラフィックデザイン・アニメーション制作に参入'
    },
    {
      date: '2025.04',
      title: 'チーム拡大',
      description: 'Vsinger「來世」がVOID-LAB代表として参画'
    },
    {
      date: '2026.06',
      title: 'サービス統合',
      description: '映像・グラフィック・音声を統合したスタジオに進化'
    }
  ]

  return (
    <section className="relative py-32 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-light text-gray-500 tracking-widest">04 HISTORY</span>
          <h2 className="text-5xl md:text-6xl font-light text-black mt-4">
            これまでの歩み
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-8"
            >
              {/* Date */}
              <div className="flex-shrink-0 w-24">
                <p className="text-sm font-light text-gray-500 tracking-widest">{milestone.date}</p>
              </div>

              {/* Content */}
              <div className="flex-grow pb-8 border-b border-gray-200">
                <h3 className="text-xl font-light text-black mb-2">{milestone.title}</h3>
                <p className="text-gray-600 font-light text-sm">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
