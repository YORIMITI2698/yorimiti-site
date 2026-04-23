'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  const services = [
    {
      icon: faHeadset,
      title: 'Drone Operation',
      description: 'ドローン空撮による映像撮影。安定型ドローンとFPVドローンでの撮影が可能',
      details: [
        'ドローン4K空撮',
        '安定型ドローン撮影',
        'FPVドローン撮影'
      ],
      hasBackground: false
    },
    {
      icon: faVideo,
      title: 'Shooting / Editing',
      description: '広告・SNS・YouTubeなどの高品質撮影・編集サービス。',
      details: [
        '高品質撮影',
        '動画編集・カラーグレーディング',
        'ロケーション撮影対応'
      ],
      hasBackground: false
    },
    {
      image: '/icon2.png',
      title: 'YORIMITI graphic',
      description: 'ロゴ、サムネイル、バナーなどのグラフィックデザイン、リリックビデオからオリジナルMVまでのアニメーション制作。',
      details: [
        'ロゴデザイン',
        'サムネイル制作',
        'バナー・UI デザイン',
        'アニメーションMV制作',
        '楽曲MIX・マスタリング',
        'フル企画制作対応'
      ],
      hasButton: true,
      hasBackground: true
    }
  ]

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Service Title */}
      <section className="relative py-12 px-4 flex items-center justify-center overflow-hidden bg-dark-bg min-h-[300px]">
        {/* Content */}
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            className="text-5xl md:text-6xl font-light text-white mb-12"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SERVICE
          </motion.h1>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`relative py-24 px-4 overflow-hidden ${service.hasBackground ? '' : 'bg-dark-bg'}`}
        >
          {service.hasBackground && (
            <>
              {/* Background Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-100"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/grunge-v1.mp4" type="video/mp4" />
              </video>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30" />
            </>
          )}

          <div className={`max-w-7xl mx-auto ${service.hasBackground ? 'relative z-10' : ''}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="border-b border-dark-highlight pb-12">
                <div className="mb-6">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={60}
                      height={60}
                      style={{ width: 'auto', height: 'auto' }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={service.icon} className="text-5xl text-white" />
                  )}
                </div>
                <motion.h3
                  className="text-4xl md:text-5xl font-light text-white mb-6"
                  style={{ fontFamily: 'Georgia, serif' }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-text-secondary mb-8 font-light text-base md:text-lg max-w-2xl">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-text-secondary text-sm flex items-start font-light">
                      <span className="text-white mr-3 font-light">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                {service.hasButton && (
                  <a href="/graphic-service" className="inline-block text-white text-xs font-light tracking-widest border border-white px-6 py-2 hover:bg-white hover:text-black transition-all">
                    詳細を見る
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  )
}
