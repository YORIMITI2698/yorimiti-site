'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  const services = [
    {
      icon: '🚁',
      title: 'Drone Operation',
      description: 'ドローン空撮による映像撮影。安定型ドローンとFPVドローンでの撮影が可能',
      details: [
        'ドローン4K空撮',
        '安定型ドローン撮影',
        'FPVドローン撮影'
      ]
    },
    {
      icon: '📹',
      title: 'Shooting / Editing',
      description: '広告・SNS・YouTubeなどの高品質撮影・編集サービス。',
      details: [
        '高品質撮影',
        '動画編集・カラーグレーディング',
        'ロケーション撮影対応'
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
      ],
      hasButton: true
    }
  ]

  return (
    <motion.main
      className="bg-black min-h-screen"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5, originY: 0 }}
    >
      <Navbar />

      {/* Services Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-bg via-dark-bg to-dark-highlight overflow-hidden pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-6"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Services
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              高品質なビジュアルコンテンツ制作をトータルサポート
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-light text-white text-center mb-24"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            提供サービス
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
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
                <h3 className="text-3xl font-light text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>{service.title}</h3>
                <p className="text-text-secondary mb-8 font-light">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start font-light">
                      <span className="text-white mr-3 font-light">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
            