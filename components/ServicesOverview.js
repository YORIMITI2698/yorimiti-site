'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import KineticTitle from '@/components/mv/KineticTitle'

export default function Services() {
  const services = [
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 8C19.3 8 9 18.3 9 31C9 43.7 19.3 54 32 54C44.7 54 55 43.7 55 31C55 18.3 44.7 8 32 8ZM32 48C22.1 48 14 39.9 14 30C14 20.1 22.1 12 32 12C41.9 12 50 20.1 50 30C50 39.9 41.9 48 32 48Z" fill="currentColor"/>
          <path d="M32 18C28.7 18 26 20.7 26 24V36C26 39.3 28.7 42 32 42C35.3 42 38 39.3 38 36V24C38 20.7 35.3 18 32 18ZM35 36C35 37.7 33.7 39 32 39C30.3 39 29 37.7 29 36V24C29 22.3 30.3 21 32 21C33.7 21 35 22.3 35 24V36Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Drone Operation',
      link: '/services'
    },
    {
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56 12H8C5.8 12 4 13.8 4 16V48C4 50.2 5.8 52 8 52H56C58.2 52 60 50.2 60 48V16C60 13.8 58.2 12 56 12ZM57 48C57 48.6 56.6 49 56 49H8C7.4 49 7 48.6 7 48V16C7 15.4 7.4 15 8 15H56C56.6 15 57 15.4 57 16V48Z" fill="currentColor"/>
          <path d="M32 28C27.6 28 24 31.6 24 36C24 40.4 27.6 44 32 44C36.4 44 40 40.4 40 36C40 31.6 36.4 28 32 28ZM32 41C29.2 41 27 38.8 27 36C27 33.2 29.2 31 32 31C34.8 31 37 33.2 37 36C37 38.8 34.8 41 32 41Z" fill="currentColor"/>
          <circle cx="48" cy="22" r="2" fill="currentColor"/>
        </svg>
      ),
      title: 'RE::Locus / Motion | MIX',
      link: '/services'
    }
  ]

  return (
    <section className="relative py-32 bg-ink border-y border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <KineticTitle text="SERVICE" chapter="02" className="mb-16" />

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.link}>
                <div className="relative h-full p-12 border border-leaf/60 rounded-lg bg-leaf/15 backdrop-blur transition-all duration-300 cursor-pointer hover:border-acid hover:bg-leaf/25 hover:-translate-y-1">
                  {/* clip number */}
                  <span className="tc absolute top-5 right-6 text-[10px] text-acid/60 tracking-[0.25em]">
                    CLIP {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="text-fog mb-4 group-hover:text-acid transition-colors">{service.icon}</div>
                  <h3 className="font-disp text-xl font-bold text-fog mb-3">
                    {service.title}
                  </h3>
                  <span className="text-acid font-light text-xs tracking-widest inline-block group-hover:translate-x-2 transition-transform">
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
            className="group relative inline-block px-8 py-3 border border-fog/70 text-fog text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink"
          >
            <span className="absolute inset-0 bg-fog origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="relative">All Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
