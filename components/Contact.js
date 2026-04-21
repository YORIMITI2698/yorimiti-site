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
  const [bocaroMVData, setBocaroMVData] = useState({
    songName: '',
    deadline: '',
    referenceVideo: '',
    sharedData: '',
    includeVocalMix: false
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

  const handleBocaroMVChange = (field, value) => {
    setBocaroMVData({ ...bocaroMVData, [field]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  }

  return (
    <section id="contact" className="py-20 bg-dark-bg">
      <div className="max-w-3xl mx-auto px-4 lg:px-8">
        <motion.h2
          className="text-5xl md:text-6xl font-light text-white mb-16 text-center"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          お問い合わせ
        </motion.h2>

        <motion.form
          action="https://formspree.io/f/maqaoblg"
          method="POST"
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-light text-text-secondary mb-4 tracking-widest">
              ご希望のサービス / SERVICE
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {serviceOptions.map((option) => (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => setSelectedService(option)}
                  className={`px-6 py-3 rounded-lg font-light text-sm transition-all border ${
                    selectedService === option
                      ? 'bg-white text-black border-white'
                      : 'bg-dark-highlight border-dark-highlight text-text-secondary hover:border-white hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option}
                </motion.button>
              ))}
            </div>
            <input type="hidden" name="service" value={selectedService} />
          </motion.div>

          {/* Common Fields */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Name */}
            <div>
              <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                お名前 *
              </label>
              <input
                type="text"
                name="name"
                placeholder=""
                required
                className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                会社名
              </label>
              <input
                type="text"
                name="company"
                placeholder=""
                className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                メールアドレス *
              </label>
              <input
                type="email"
                name="email"
                placeholder=""
                required
                className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                placeholder=""
                className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
              />
            </div>
          </motion.div>

          {/* Vocal Mix Fields */}
          {selectedService === 'Vocal Mix' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-6 border-t border-dark-highlight"
            >
              {/* Menu Selection */}
              <div>
                <label className="block text-xs text-text-tertiary mb-3 tracking-widest">
                  メニュー
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {menuOptions.map((menu) => (
                    <motion.button
                      key={menu}
                      type="button"
                      onClick={() => handleVocalMixChange('menu', menu)}
                      className={`px-3 py-2 rounded text-xs font-light transition-all border ${
                        vocalMixData.menu === menu
                          ? 'bg-white text-black border-white'
                          : 'bg-dark-highlight border-dark-highlight text-text-secondary hover:border-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {menu}
                    </motion.button>
                  ))}
                </div>
                <input type="hidden" name="vocal_menu" value={vocalMixData.menu} />
              </div>

              {/* Song Name */}
              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  曲名 *
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={vocalMixData.songName}
                  onChange={(e) => handleVocalMixChange('songName', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="vocal_songName" value={vocalMixData.songName} />
              </div>

              {/* Key Change */}
              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  キー変更
                </label>
                <input
                  type="text"
                  placeholder="例：-3, +2"
                  value={vocalMixData.keyChange}
                  onChange={(e) => handleVocalMixChange('keyChange', e.target.value)}
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="vocal_keyChange" value={vocalMixData.keyChange} />
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  納品希望日 *
                </label>
                <input
                  type="date"
                  value={vocalMixData.deadline}
                  onChange={(e) => handleVocalMixChange('deadline', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="vocal_deadline" value={vocalMixData.deadline} />
              </div>

              {/* Recording Data */}
              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  録音データ *
                </label>
                <input
                  type="text"
                  placeholder="Google Drive / ギガファイル便など"
                  value={vocalMixData.recordingData}
                  onChange={(e) => handleVocalMixChange('recordingData', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="vocal_recordingData" value={vocalMixData.recordingData} />
              </div>

              {/* Options */}
              <div>
                <label className="block text-xs text-text-tertiary mb-3 tracking-widest">
                  オプション
                </label>
                <div className="space-y-2">
                  {optionChoices.map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={vocalMixData.options.includes(option)}
                        onChange={() => handleOptionToggle(option)}
                        className="w-4 h-4 accent-white rounded"
                      />
                      <span className="text-sm text-text-secondary">{option}</span>
                    </label>
                  ))}
                </div>
                <input type="hidden" name="vocal_options" value={vocalMixData.options.join(', ')} />
              </div>
            </motion.div>
          )}

          {/* Bocaro MV Fields */}
          {selectedService === 'ボカロMV' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 pt-6 border-t border-dark-highlight"
            >
              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  曲名 *
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={bocaroMVData.songName}
                  onChange={(e) => handleBocaroMVChange('songName', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="mv_songName" value={bocaroMVData.songName} />
              </div>

              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  納品希望日 *
                </label>
                <input
                  type="date"
                  value={bocaroMVData.deadline}
                  onChange={(e) => handleBocaroMVChange('deadline', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="mv_deadline" value={bocaroMVData.deadline} />
              </div>

              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  参考動画
                </label>
                <input
                  type="url"
                  placeholder="YouTube URL など"
                  value={bocaroMVData.referenceVideo}
                  onChange={(e) => handleBocaroMVChange('referenceVideo', e.target.value)}
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="mv_referenceVideo" value={bocaroMVData.referenceVideo} />
              </div>

              <div>
                <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
                  共有データ
                </label>
                <textarea
                  placeholder="イラスト、楽曲等の素材がすでにあれば入れてください。"
                  value={bocaroMVData.sharedData}
                  onChange={(e) => handleBocaroMVChange('sharedData', e.target.value)}
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm h-24"
                />
                <input type="hidden" name="mv_sharedData" value={bocaroMVData.sharedData} />
              </div>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={bocaroMVData.includeVocalMix}
                  onChange={(e) => handleBocaroMVChange('includeVocalMix', e.target.checked)}
                  className="w-4 h-4 accent-white rounded"
                />
                <span className="text-sm text-text-secondary">Mixも同時に依頼する</span>
              </label>
              <input type="hidden" name="mv_includeVocalMix" value={bocaroMVData.includeVocalMix} />
            </motion.div>
          )}

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <label className="block text-xs text-text-tertiary mb-2 tracking-widest">
              お問い合わせ内容
            </label>
            <textarea
              name="message"
              placeholder=""
              rows="6"
              className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white placeholder-text-tertiary focus:border-white focus:outline-none transition-colors text-sm"
            />
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 border border-white text-white font-light text-sm tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? '送信中...' : 'SUBMIT'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
