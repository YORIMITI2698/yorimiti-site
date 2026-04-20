'use client'

import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: 'Shooting',
    price: '¥50,000',
    note: '撮影サービス',
    features: [
      'ドローン空撮（1日）',
      '素材納品（4K映像）',
      '基本カラー補正'
    ],
    featured: false
  },
  {
    name: 'Editing',
    price: '¥30,000',
    note: '編集サービス',
    features: [
      '素材からの編集',
      '音声同期',
      '修正1回無料'
    ],
    featured: true
  },
  {
    name: 'Animation MV',
    price: '¥80,000',
    note: 'フルMV制作',
    features: [
      '企画・構成',
      'アニメーション制作',
      'マスタリング対応'
    ],
    featured: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-blue-green bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          料金表
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 transition-all ${
                plan.featured
                  ? 'bg-dark-secondary border-2 border-accent-cyan shadow-2xl shadow-cyan-500/20 md:scale-105'
                  : 'bg-dark-secondary/60 border border-purple-500/20 hover:border-accent-cyan'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-accent-cyan mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent mb-1">
                {plan.price}
              </div>
              <p className="text-text-secondary text-sm mb-6">{plan.note}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-start">
                    <span className="text-accent-cyan mr-3">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                plan.featured
                  ? 'bg-gradient-purple-blue text-white hover:shadow-lg hover:-translate-y-1'
                  : 'bg-dark-bg text-text-primary border border-purple-500/30 hover:border-accent-cyan'
              }`}>
                詳細を見る
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
