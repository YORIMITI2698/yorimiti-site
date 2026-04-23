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
      description: 'ドローン空撮による映像撮影。安定型ドローンとFPVドローンでの撮影が可能',
      details: [
        'ドローン4K空撮',
        '安定型ドローン撮影',
        'FPVドローン撮影'
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
      name: 'YORIMITI graphic',
      image: '/icon2.png',
      description: 'ロゴ、サムネイル、バナーなどのグラフィックデザイン、リリックビデオからオリジナルMVまでのアニメーション制作。',
      details: [
        'ロゴデザイン',
        'サムネイル制作',
        'バナー・UI デザイン',
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
            style={{ fontFamily: 'Georgia, serif' }}
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
                {service.name}
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

        <div className="max-w-7xl mx-auto relative z-10">
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
                className="text-4xl md:text-5xl font-light text-white mb-6"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {selectedService.name}
              </motion.h2>

              {/* Description */}
              <p className="text-text-secondary mb-12 font-light text-base md:text-lg max-w-2xl">
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
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
