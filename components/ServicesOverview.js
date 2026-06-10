'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: '🎬',
      title: 'Drone Operation',
      description: '安定型ドローンとFPVドローンで、最大8Kの高品質空撮を実現。安全管理を徹底した撮影プランを提案します。',
      link: '/services'
    },
    {
      icon: '🎨',
      title: 'RE::Locus / Motion | MIX',
      description: 'ボカロMVをはじめとしたMotionGraphic制作と、楽曲のMIX・マスタリングを提供。',
      link: '/services'
    }
  ]

  return (
    <section className="relative py-32 px-4 bg-dark-bg border-y border-dark-highlight">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-wider">
            Our Services
          </h2>
          <p className="text-text-secondary font-light text-base max-w-2xl mx-auto">
            映像制作からグラフィックデザイン、音声制作まで。
            YORIMITIは、あなたの想いを形にするクリエイティブチームです。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.link}>
                <div className="h-full p-8 border border-dark-highlight rounded-lg hover:border-white transition-all bg-dark-highlight/20 backdrop-blur hover:bg-dark-highlight/40 cursor-pointer">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-light text-white mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary font-light text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-white font-light text-xs tracking-widest inline-block group-hover:translate-x-2 transition-transform">
                    詳しく見る →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 border-2 border-white text-white text-sm font-light tracking-widest hover:bg-white hover:text-black transition-all"
          >
            All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
