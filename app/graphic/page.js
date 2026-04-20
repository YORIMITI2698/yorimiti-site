'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Graphic() {
  const graphicServices = [
    {
      icon: '🖼️',
      title: 'ロゴデザイン',
      description: 'ブランドのアイデンティティを表現する、高品質なロゴデザイン。',
      features: [
        'ロゴマーク制作',
        'ロゴタイプデザイン',
        'ブランドガイドライン'
      ]
    },
    {
      icon: '📸',
      title: 'サムネイル制作',
      description: 'YouTube、SNSなどの動画プラットフォーム向けサムネイル。',
      features: [
        'YouTube サムネイル',
        'SNS 投稿画像',
        'デジタル広告バナー'
      ]
    },
    {
      icon: '🎨',
      title: 'UI/UXデザイン',
      description: 'ユーザー体験を重視したインターフェースデザイン。',
      features: [
        'Webサイト UI',
        'アプリケーション UI',
        'ボタン・アイコン設計'
      ]
    }
  ]

  return (
    <motion.main
      className="bg-white"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5, originY: 0 }}
    >
      <Navbar />

      {/* Graphic Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ backgroundColor: '#18141a' }}>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-6 italic" style={{ fontFamily: 'Georgia, Garamond, serif' }}>
              YORIMITI Graphic
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Graphic Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-pink-purple bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            グラフィックサービス
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {graphicServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white border border-purple-500/20 rounded-2xl p-8 hover:border-accent-cyan transition-all hover:-translate-y-2 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-accent-cyan mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <span className="text-accent-cyan mr-3">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
