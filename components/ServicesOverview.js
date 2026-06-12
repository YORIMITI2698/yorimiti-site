'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import KineticTitle from '@/components/mv/KineticTitle'
import { DroneArt, PcArt } from '@/components/mv/RoadsideArt'

// v2: services as roadside signposts.
export default function Services() {
  const services = [
    {
      icon: <DroneArt className="w-28 h-auto" />,
      title: 'Drone Operation',
      label: '道標 其の一',
      link: '/services'
    },
    {
      icon: <PcArt className="w-28 h-auto" />,
      title: 'RE::Locus / Motion | MIX',
      label: '道標 其の二',
      link: '/services'
    }
  ]

  return (
    <section className="relative py-32 bg-panel/60 dark:bg-[#1f2330]/70 border-y border-line dark:border-[#343a4d] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <KineticTitle text="SERVICE" chapter="02" className="mb-16" />

        {/* Signpost Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.link}>
                <div className="relative h-full p-12 bg-white dark:bg-[#232838] border border-line dark:border-[#343a4d] rounded-sm shadow-[0_6px_20px_rgba(42,39,35,0.08)] transition-all duration-300 cursor-pointer hover:shadow-[0_12px_30px_rgba(42,39,35,0.14)] hover:-translate-y-1 hover:-rotate-[0.6deg]">
                  <span className="tc absolute top-5 right-6 text-[10px] text-beni tracking-[0.3em]">
                    {service.label}
                  </span>
                  <div className="text-acid dark:text-[#e3c567] mb-4 transition-colors group-hover:text-leaf dark:group-hover:text-[#f6ecd0]">{service.icon}</div>
                  <h3 className="font-disp text-xl font-normal text-fog dark:text-[#e8e6df] mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  <span className="text-acid dark:text-[#e3c567] font-light text-xs tracking-widest inline-block group-hover:translate-x-2 transition-transform">
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
            className="group relative inline-block px-8 py-3 border border-fog/60 dark:border-[#e8e6df]/60 text-fog dark:text-[#e8e6df] text-sm font-light tracking-widest overflow-hidden transition-colors hover:text-ink dark:hover:text-[#171a26]"
          >
            <span className="absolute inset-0 bg-fog dark:bg-[#e8e6df] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="relative">All Services</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
