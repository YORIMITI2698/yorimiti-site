'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function StatsSection() {
  const [counts, setCounts] = useState({ projects: 0, years: 0, clients: 0, members: 0 })

  const stats = [
    { label: 'Projects Completed', value: 50, unit: '+' },
    { label: 'Years of Experience', value: 3, unit: '' },
    { label: 'Happy Clients', value: 30, unit: '+' },
    { label: 'Team Members', value: 2, unit: '' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => {
        const next = { ...prev }
        if (prev.projects < 50) next.projects += 1
        if (prev.years < 3) next.years += 0.1
        if (prev.clients < 30) next.clients += 1
        if (prev.members < 2) next.members += 0.1
        return next
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 px-4 bg-dark-bg border-y border-dark-highlight">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                {stat.value === 50 ? Math.floor(counts.projects) :
                 stat.value === 3 ? Math.floor(counts.years) :
                 stat.value === 30 ? Math.floor(counts.clients) :
                 Math.floor(counts.members)}{stat.unit}
              </div>
              <p className="text-text-secondary text-sm font-light tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
