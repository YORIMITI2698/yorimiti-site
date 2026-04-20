'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedService, setSelectedService] = useState('通常のご相談')
  const [vocalMixData, setVocalMixData] = useState({
    menu: 'Full',
    songName: '',
    keyChange: '',
    deadline: '',
    recordingData: '',
    options: []
  })

  const serviceOptions = ['通常のご相談', 'Vocal Mix', 'ボカロMV']
  const menuOptions = ['Full', '1Chorus', 'Short']
  const optionChoices = ['短納期', 'ハモリガイド作成', 'アカペラ書き出し', 'Inst+ハモリ書き出し']

  const handleVocalMixChange = (field, value) => {
    setVocalMixData({ ...vocalMixData, [field]: value })
  }

  const handleOptionToggle = (option) => {
    setVocalMixData({
      ...vocalMixData,
      options: vocalMixData.options.includes(option)
        ? vocalMixData.options.filter(o => o !== option)
        : [...vocalMixData.options, option]
    })
  }

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

          {/* Vocal Mix 追加フィールド */}
          {selectedService === 'Vocal Mix' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-6 border-t border-purple-500/20"
            >
              {/* メニュー選択 */}
              <div>
                <div className="flex gap-3">
                  {menuOptions.map((menu) => (
                    <motion.button
                      key={menu}
                      type="button"
                      onClick={() => handleVocalMixChange('menu', menu)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        vocalMixData.menu === menu
                          ? 'bg-accent-cyan text-white'
                          : 'bg-white border border-purple-500/30 text-gray-900 hover:border-accent-cyan'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {menu}
                    </motion.button>
                  ))}
                </div>
                <input type="hidden" name="vocal_menu" value={vocalMixData.menu} />
              </div>

              {/* Full / 1Chorus / Short 表記修正 */}

              {/* 曲名 */}
              <div>
                <input
                  type="text"
                  placeholder="曲名"
                  value={vocalMixData.songName}
                  onChange={(e) => handleVocalMixChange('songName', e.target.value)}
                  className="w-full px-6 py-3 bg-white border border-purple-500/30 rounded-lg text-gray-900 placeholder-gray-500 focus:border-accent-cyan focus:outline-none transition-colors"
                />
                <input type="hidden" name="vocal_songName" value={vocalMixData.songName} />
              </div>

              {/* キー変更 */}
              <div>
                <input
                  type="text"
                  placeholder="キー変更（例：-3, +2）"
                  value={vocalMixData.keyChange}
                  onChange={(e) => handleVocalMixChange('keyChange', e.target.value)}
                  className="w-full px-6 py-3 bg-white border border-purple-500/30 rounded-lg text-gray-900 placeholder-gray-500 focus:border-accent-cyan focus:outline-none transition-colors"
                />
                <input type="hidden" name="vocal_keyChange" value={vocalMixData.keyChange} />
              </div>

              {/* 納期 */}
              <div>
                <input
                  type="date"
                  value={vocalMixData.deadline}
                  onChange={(e) => handleVocalMixChange('deadline', e.target.value)}
                  className="w-full px-6 py-3 bg-white border border-purple-500/30 rounded-lg text-gray-900 focus:border-accent-cyan focus:outline-none transition-colors"
                />
                <input type="hidden" name="vocal_deadline" value={vocalMixData.deadline} />
              </div>

              {/* 録音データ */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">録音DATA</label>
                <input
                  type="text"
                  placeholder="Google Drive / ギガファイル便など"
                  value={vocalMixData.recordingData}
                  onChange={(e) => handleVocalMixChange('recordingData', e.target.value)}
                  className="w-full px-6 py-3 bg-white border border-purple-500/30 rounded-lg text-gray-900 placeholder-gray-500 focus:border-accent-cyan focus:outline-none transition-colors"
                />
                <input type="hidden" name="vocal_recordingData" value={vocalMixData.recordingData} />
              </div>

              {/* オプション */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">オプション</label>
                <div className="space-y-3">
                  {optionChoices.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={vocalMixData.options.includes(option)}
                        onChange={() => handleOptionToggle(option)}
                        className="w-5 h-5 accent-accent-cyan rounded"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
                <input type="hidden" name="vocal_options" value={vocalMixData.options.join(', ')} />
              </div>
            </motion.div>
          )}

          <div>
            <textarea
              name="message"
              placeholder="お問い合わせ内容"
              required={selectedService !== 'Vocal Mix'}
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
