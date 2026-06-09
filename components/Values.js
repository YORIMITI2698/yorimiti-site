'use client'

import { motion } from 'framer-motion'

export default function Values() {
  const values = [
    {
      title: '安全',
      description: '現場の状況を見極め、安全な運用を最優先に徹底します。'
    },
    {
      title: '技術',
      description: '豊富な経験と技術力で、目的に応える品質を届けます。'
    },
    {
      title: '共有',
      description: '目指す成果を共有し、同じ方向を見て進めます。'
    },
    {
      title: '進化',
      description: '新しい技術を取り入れ、表現と精度を高め続けます。'
    }
  ]

  return (
    <section className="relative py-32 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-light text-gray-500 tracking-widest">03 VALUES</span>
          <h2 className="text-5xl md:text-6xl font-light text-black mt-4">
            私たちが大切にすること
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pb-8 border-b border-gray-300"
            >
              <h3 className="text-2xl font-light text-black mb-4">{value.title}</h3>
              <p className="text-gray-600 font-light text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
