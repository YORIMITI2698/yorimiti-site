'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faVideo } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  const [selectedType, setSelectedType] = useState('Drone Operation')

  const services = [
    {
      name: 'Drone Operation',
      icon: faHeadset,
      sections: [
        {
          title: 'SERVICE・Drone',
          content: `無人航空機（ドローン）を用いた映像撮影を行っております。
安定型ドローンと自作FPVドローンでの撮影が可能で記録、CM、MVなど多種多様なコンテンツに対応します。
弊社では安全管理を徹底した撮影プランをご提案します。`
        },
        {
          title: '安定型ドローンによる空撮',
          content: `安定した飛行性能を持つ機体です。
最大8Kまでの高品質な空撮を提供します。
広角、望遠に加えレンズ交換式の機体もあり多種多様な画角を実現します。`
        },
        {
          title: 'FPVドローン撮影',
          content: `※FPVとはFirst Person View の省略で1人称視点という意味です。
機体に搭載したFPVカメラからの映像を見ながら飛行させることを意味します。
完全マニュアル操縦で、ダイナミックな映像表現を可能にします。
被写体の周囲や狭い隙間などをすり抜けるダイナミックな映像を撮影します。`
        },
        {
          title: '航空法・申請',
          content: `各機体は航空法の年間包括申請を取得済みです。
航空法に関する国交省申請はロケーションに合わせて弊社から申請させていただきます。
※ 2～3週間程度申請に時間を要するためお早めにご相談ください。`
        },
        {
          title: '保険',
          content: `リスク管理・安全対策を前提に状況に応じた柔軟な対応で撮影を進めます。
万が一に備え、賠償責任保険にも加入済みです。`
        }
      ]
    },
    {
      name: 'Shooting / Editing',
      icon: faVideo,
      description: '広告・SNS・YouTubeなどの高品質撮影・編集サービス。',
      details: [
        '高品質撮影',
        '動画編集・カラーグレーディング',
        'ロケーション撮影対応'
      ]
    },
    {
      name: 'RE::Locus',
      displayName: 'RE::Locus / Motion | MIX',
      image: '/icon2.png',
      description: `私たちRE::LocusはYORIMITIのGraphic特化型チームです。
チーム名は物事の再試行を行い軌跡を作りご依頼者様と私たちの点と点が線になることをイメージした名前です。

RE::LocusではボカロMVを始めとしたMotionGraphicの制作やMIXのご依頼を受け付けております。`,
      details: [
        'アニメーションMV制作',
        '楽曲MIX・マスタリング',
        'フル企画制作対応'
      ]
    }
  ]

  const selectedService = services.find(s => s.name === selectedType)

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Service Title */}
      <section className="pt-20 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-light text-white mb-12"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SERVICE
          </motion.h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 px-4 bg-dark-bg border-y border-dark-highlight">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.button
                key={service.name}
                onClick={() => setSelectedType(service.name)}
                className={`text-xs font-light tracking-widest px-4 py-2 rounded-full transition-all border ${
                  selectedType === service.name
                    ? 'bg-white text-black border-white'
                    : 'border-dark-highlight text-text-secondary hover:border-white hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.displayName || service.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Content */}
      <section className="relative py-32 px-4 overflow-hidden">
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

        <div className="max-w-4xl mx-auto relative z-10">
          {selectedService && (
            <motion.div
              key={selectedService.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-dark-highlight/30 backdrop-blur border border-dark-highlight rounded-lg p-12 md:p-16"
            >
              {/* Icon */}
              <div className="mb-8">
                {selectedService.image ? (
                  <Image
                    src={selectedService.image}
                    alt={selectedService.name}
                    width={80}
                    height={80}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                ) : (
                  <FontAwesomeIcon icon={selectedService.icon} className="text-6xl text-white" />
                )}
              </div>

              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl font-light text-white mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {selectedService.name}
              </motion.h2>

              {/* Sections (for Drone Operation and others with sections) */}
              {selectedService.sections ? (
                <motion.div
                  className="space-y-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {selectedService.sections.map((section, i) => (
                    <div key={i} className="border-b border-dark-highlight pb-8 last:border-b-0">
                      {i > 0 && <h3 className="text-xl md:text-2xl font-light text-white mb-4">◆ {section.title}</h3>}
                      <p className={`text-text-secondary font-light text-sm md:text-base whitespace-pre-line leading-relaxed ${i === 0 ? 'mb-12' : ''}`}>
                        {section.content}
                      </p>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <>
                  {/* Description */}
                  <p className="text-text-secondary mb-12 font-light text-base md:text-lg max-w-2xl whitespace-pre-line leading-relaxed">
                    {selectedService.description}
                  </p>

                  {/* Details */}
                  <motion.ul
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {selectedService.details.map((detail, i) => (
                      <li key={i} className="text-text-secondary text-sm md:text-base flex items-start font-light">
                        <span className="text-white mr-4 font-light">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </motion.ul>
                </>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
                                                                                                              