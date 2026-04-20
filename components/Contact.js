'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState('通常のご相談')

  const serviceOptions = ['通常のご相談', 'Vocal Mix', 'ボカロMV']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Formspree がフォーム送信を自動処理するため、フロントエンド側では追加処理不要
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-4 lg:px-12 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-purple-blue bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          お問い合わせ
        </motion.h2>

        <motion.form
          action="https://formspree.io/f/maqaoblg"
          method="POST"
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="お名前"
              required
              className="w-full px-6 py-3 bg-white border border-purple-500/30 rounded-lg text-gray-900 placeholder-gray-500 focus:border-accent-cyan focus:outline-none transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="メールアドレス"
              required
              className="w-full px-6 py-3 bg-white border border-purple-500/30 rounded-lg text-gray-900 placeholder-gray-500 focus:border-accent-cyan focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-4">ご希望のサービス</label>
            <div className="flex gap-3 flex-wrap">
              {serviceOptions.map((option) => (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => setSelectedService(option)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedService === option
                      ? 'bg-gradient-purple-blue text-white shadow-lg'
                      : 'bg-white border border-purple-500/30 text-gray-900 hover:border-accent-cyan'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>
            <input
              type="hidden"
              name="service"
              value={selectedService}
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="お問い合わせ内容"
              required
              rows="5"
              className="w-full px-6 py-3 bg-white border border-purple-500/30 rounded-lg text-gray-900 placeholder-gray-500 focus:border-accent-cyan focus:outline-none transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-pink-purple text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/50 transition-all disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
