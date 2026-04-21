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
    <main className="bg-black">
      <Navbar />

      {/* Graphic Hero - Dark Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{ backgroundColor: '#0a0a0a' }}>
        {/* Geometric Background Animation */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(24, 20, 26, 0.1)" />
              <stop offset="100%" stopColor="rgba(24, 20, 26, 0.05)" />
            </linearGradient>
          </defs>

          {/* Concentric Circles */}
          <motion.circle cx="500" cy="500" r="300" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" animate={{ r: [300, 310, 300] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.circle cx="500" cy="500" r="200" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" animate={{ r: [200, 210, 200] }} transition={{ duration: 10, repeat: Infinity }} />
          <motion.circle cx="500" cy="500" r="100" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" animate={{ r: [100, 110, 100] }} transition={{ duration: 12, repeat: Infinity }} />

          {/* Triangle */}
          <motion.polygon points="500,300 700,700 300,700" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 6, repeat: Infinity }} />

          {/* Dots */}
          <motion.circle cx="300" cy="300" r="3" fill="rgba(255, 255, 255, 0.3)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.circle cx="700" cy="300" r="3" fill="rgba(255, 255, 255, 0.3)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} />
          <motion.circle cx="500" cy="150" r="3" fill="rgba(255, 255, 255, 0.3)" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} />
        </svg>

        {/* Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.p
                className="text-sm text-text-secondary mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                (Studio)
              </motion.p>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6"
                style={{ fontFamily: 'Georgia, Garamond, serif' }}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                YORIMITI Graphic
              </motion.h1>
              <motion.p
                className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ロゴ、サムネイル、UI/UXデザイン。<br/>
                プロセスとアイデアから形になった<br/>
                グラフィックデザインをまとめています。
              </motion.p>
              <motion.p
                className="text-sm md:text-base text-text-secondary leading-relaxed mb-8 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                A selection of graphic design shaped through process and ideas.
              </motion.p>
              <motion.button
                className="border border-white text-white px-6 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                View Graphic →
              </motion.button>
            </motion.div>

            {/* Right - Visual Element */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative aspect-square bg-gradient-to-br from-dark-highlight to-black rounded-xl overflow-hidden border border-dark-highlight">
                <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  {/* Abstract Design Elements */}
                  <motion.circle cx="200" cy="200" r="150" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                  <motion.circle cx="200" cy="200" r="100" fill="none" stroke="rgba(100, 200, 255, 0.2)" strokeWidth="2" animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
                  <motion.rect x="100" y="100" width="200" height="200" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />

                  {/* Floating Elements */}
                  <motion.circle cx="150" cy="150" r="8" fill="rgba(100, 200, 255, 0.6)" animate={{ y: [-20, 20, -20] }} transition={{ duration: 4, repeat: Infinity }} />
                  <motion.circle cx="250" cy="150" r="8" fill="rgba(100, 200, 255, 0.6)" animate={{ y: [20, -20, 20] }} transition={{ duration: 5, repeat: Infinity }} />
                  <motion.circle cx="200" cy="250" r="8" fill="rgba(100, 200, 255, 0.6)" animate={{ y: [-15, 15, -15] }} transition={{ duration: 4.5, repeat: Infinity }} />

                  {/* Decorative Lines */}
                  <line x1="100" y1="200" x2="300" y2="200" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  <line x1="200" y1="100" x2="200" y2="300" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Graphic Services Section - Dark Theme */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-light text-center mb-20 text-white"
            style={{ fontFamily: 'Georgia, Garamond, serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {graphicServices.map((service, index) => (
              <motion.div
                key={index}
                className="border border-dark-highlight rounded-lg p-8 hover:border-white transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, Garamond, serif' }}>{service.title}</h3>
                <p className="text-text-secondary mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start">
                      <span className="text-white mr-3">→</span>
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
    </main>
  )
}
