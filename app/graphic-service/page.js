'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function GraphicService() {
  const services = [
    {
      title: 'GRAPHIC',
      icon: '🎨',
      description: 'ロゴ、サムネイル、UI/UXデザイン。\nプロセスとアイデアから形になった\nグラフィックデザインをまとめています。',
      englishDesc: 'A selection of graphic design shaped through process and ideas.',
      details: [
        'ロゴマーク制作',
        'YouTubeサムネイル',
        'SNS投稿画像',
        'UI/UXデザイン',
        'バナー・アイコン設計'
      ]
    },
    {
      title: 'MIX',
      icon: '🎵',
      description: 'ボカロ楽曲のボーカルミックス・マスタリング',
      details: [
        'ボーカルMIX',
        'マスタリング',
        '楽曲制作サポート',
        'リリックビデオ対応',
        'フル企画制作対応'
      ]
    }
  ]

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Graphic Service Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-highlight">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-8"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Graphic & Mix
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              グラフィックデザインとMIXサービス
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-dark-highlight border border-dark-highlight rounded-lg p-12 hover:border-white transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h3 className="text-3xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-3 font-light whitespace-pre-line">{service.description}</p>
                {service.englishDesc && (
                  <p className="text-text-tertiary text-xs mb-8 font-light italic">{service.englishDesc}</p>
                )}
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start font-light">
                      <span className="text-white mr-3 font-light">→</span>
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
    </main>
  )
}
