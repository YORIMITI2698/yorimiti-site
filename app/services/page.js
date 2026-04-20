'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    {
      icon: '📹',
      title: 'Shooting',
      description: '広告・SNS・YouTubeなどの高品質撮影サービス。',
      details: [
        'ドローン4K空撮',
        '複数角度からの撮影',
        'ロケーション撮影対応'
      ]
    },
    {
      icon: '✂️',
      title: 'Editing',
      description: 'ボカロMV、通常動画の高品質編集。',
      details: [
        'ボカロMV編集',
        '通常動画編集',
        'カラーグレーディング'
      ]
    },
    {
      icon: '🎨',
      title: 'Animation MV',
      description: 'リリックビデオからオリジナルMVまで、多様なモーショングラフィック制作。',
      details: [
        'アニメーションMV制作',
        '楽曲MIX・マスタリング',
        'フル企画制作対応'
      ]
    },
    {
      icon: '🖼️',
      title: 'YORIMITI graphic',
      description: 'ロゴ、サムネイル、バナーなどのグラフィックデザイン。',
      details: [
        'ロゴデザイン',
        'サムネイル制作',
        'バナー・UI デザイン'
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

      {/* Services Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black mb-6">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              高品質なビジュアルコンテンツ制作をトータルサポート
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-pink-purple bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            提供サービス
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start">
                      <span className="text-accent-cyan mr-3">✓</span>
                      <span>{detail}</span>
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
