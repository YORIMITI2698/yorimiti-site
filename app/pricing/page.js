'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'

export default function Pricing() {
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

  return (
    <motion.main
      className="bg-ink"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5, originY: 0 }}
    >
      <Navbar />

      {/* Pricing Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-ink overflow-hidden pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-disp font-light text-5xl md:text-6xl lg:text-7xl tracking-[0.12em] leading-tight text-fog mb-6">
              Pricing
            </h1>
            <p className="text-xl md:text-2xl text-mute max-w-2xl mx-auto">
              各サービスの料金一覧
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-ink">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="font-disp text-4xl md:text-5xl font-light tracking-[0.1em] text-center mb-16 text-fog"
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
                    ? 'bg-panel border-2 border-acid shadow-2xl shadow-[#a7d321]/10 md:scale-105'
                    : 'bg-panel border border-line hover:border-acid'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-disp text-2xl font-bold text-acid mb-2">{plan.name}</h3>
                <div className="tc text-4xl font-bold text-fog mb-1">
                  {plan.price}
                </div>
                <p className="text-mute text-sm mb-6">{plan.note}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-fog/80 text-sm flex items-start">
                      <span className="text-acid mr-3">→</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.featured
                    ? 'bg-acid text-ink hover:shadow-lg hover:-translate-y-1'
                    : 'bg-ink text-fog border border-line hover:border-acid'
                }`}>
                  詳細を見る
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <Seekbar />
    </motion.main>
  )
}
