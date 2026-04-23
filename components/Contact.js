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
    includeVocalMix: false,
    mixMenu: 'Full',
    mixOptions: []
  })

  const serviceOptions = ['通常のご相談', 'Vocal Mix', 'ボカロMV']
  const menuOptions = ['Full', '1Chorus', 'Short']

  const detailedPricingData = {
    'Full': {
      price: '¥6,600',
      deadline: '10～14日（修正込み目安）',
      vocalAdd: '+¥3,000 / 1名',
      delivery: 'WAV 24bit/48kHz 納品',
      included: [
        'エディット（ピッチ・タイミング補正）',
        'ミキシング',
        'エフェクト演出',
        '空間演出',
        'ハモリ生成',
        'マスタリング（YouTube向け）'
      ]
    },
    '1Chorus': {
      price: '¥4,400',
      deadline: '10～14日（修正込み目安）',
      vocalAdd: '+¥2,200 / 1名',
      delivery: 'WAV 24bit/48kHz 納品',
      included: [
        'エディット（ピッチ・タイミング補正）',
        'ミキシング',
        'エフェクト演出',
        '空間演出',
        'ハモリ生成',
        'マスタリング（YouTube向け）'
      ]
    },
    'Short': {
      price: '¥2,200',
      deadline: '5～7日（修正込み目安）',
      vocalAdd: '+¥1,100 / 1名',
      delivery: 'WAV 24bit/48kHz 納品',
      included: [
        'エディット（ピッチ・タイミング補正）',
        'ミキシング',
        'エフェクト演出',
        '空間演出',
        'ハモリ生成',
        'マスタリング（YouTube向け）'
      ]
    }
  }

  const optionChoices = [
    { label: '短納期', price: '+50%', description: '3日以内の納品' },
    { label: 'ハモリガイド作成', price: '+¥1,000～', description: '尺により変動' },
    { label: 'アカペラ書き出し', price: '要相談', description: 'ボーカルのみのデータ' },
    { label: 'Inst+ハモリ書き出し', price: '要相談', description: '別ファイルでの書き出し' }
  ]

  const pricingData = [
    { menu: 'Full', price: '¥6,600', deadline: '10～14日', vocal: '+¥3,000 / 1名' },
    { menu: '1Chorus', price: '¥4,400', deadline: '10～14日', vocal: '+¥2,200 / 1名' },
    { menu: 'Short', price: '¥2,200', deadline: '5～7日', vocal: '+¥1,100 / 1名' }
  ]

  const handleBocaroMVChange = (field, value) => {
    setBocaroMVData({ ...bocaroMVData, [field]: value })
  }

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
  }

  return (
    <section id="contact" className="py-24 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Title */}
        <motion.h2
          className="text-5xl md:text-6xl font-light text-white mb-6 text-center"
          style={{ fontFamily: 'Georgia, serif' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="text-center text-text-secondary mb-16 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          お気軽にお問い合わせください
        </motion.p>

        <motion.form
          action="https://formspree.io/f/maqaoblg"
          method="POST"
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Service Selection - Dropdown */}
          <div>
            <label className="block text-xs font-light text-text-secondary mb-3 tracking-widest uppercase">
              サービス選択 *
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 12px center',
                paddingRight: '40px'
              }}
            >
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input type="hidden" name="service" value={selectedService} />
          </div>

          {/* Common Fields */}
          <div className="space-y-6 pt-4 border-t border-dark-highlight">
            <div>
              <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
                お名前 *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
                メールアドレス *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>

          {/* Vocal Mix Fields */}
          {selectedService === 'Vocal Mix' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 pt-8 border-t border-dark-highlight"
            >
              {/* Menu Selection */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-3 tracking-widest uppercase">
                  メニュー *
                </label>
                <select
                  value={vocalMixData.menu}
                  onChange={(e) => handleVocalMixChange('menu', e.target.value)}
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    paddingRight: '40px'
                  }}
                >
                  {menuOptions.map((menu) => (
                    <option key={menu} value={menu}>
                      {menu}
                    </option>
                  ))}
                </select>
                <input type="hidden" name="vocal_menu" value={vocalMixData.menu} />
              </div>

              {/* Selected Menu Detail Card */}
              {detailedPricingData[vocalMixData.menu] && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-dark-highlight border border-dark-highlight p-6 space-y-4"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-xs text-text-tertiary mb-1 tracking-widest uppercase">料金</p>
                      <p className="text-base text-white font-light">{detailedPricingData[vocalMixData.menu].price}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary mb-1 tracking-widest uppercase">納期</p>
                      <p className="text-xs text-text-secondary font-light">{detailedPricingData[vocalMixData.menu].deadline}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary mb-1 tracking-widest uppercase">ボーカル追加</p>
                      <p className="text-xs text-text-secondary font-light">{detailedPricingData[vocalMixData.menu].vocalAdd}</p>
                    </div>
                    <div>
                      <p className="text-xs text-text-tertiary mb-1 tracking-widest uppercase">納品形式</p>
                      <p className="text-xs text-text-secondary font-light">{detailedPricingData[vocalMixData.menu].delivery}</p>
                    </div>
                  </div>

                  <div className="border-t border-dark-highlight pt-4">
                    <p className="text-xs text-text-tertiary mb-3 tracking-widest uppercase">含まれる内容</p>
                    <ul className="space-y-2">
                      {detailedPricingData[vocalMixData.menu].included.map((item, idx) => (
                        <li key={idx} className="text-xs text-text-secondary font-light flex items-start">
                          <span className="text-white mr-2">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Song Name */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
                  曲名 *
                </label>
                <input
                  type="text"
                  value={vocalMixData.songName}
                  onChange={(e) => handleVocalMixChange('songName', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="vocal_songName" value={vocalMixData.songName} />
              </div>

              {/* Key Change */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
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
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
                  納品希望日 *
                </label>
                <input
                  type="date"
                  value={vocalMixData.deadline}
                  onChange={(e) => handleVocalMixChange('deadline', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
                  style={{ accentColor: 'white' }}
                />
                <input type="hidden" name="vocal_deadline" value={vocalMixData.deadline} />
              </div>

              {/* Recording Data */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
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

              {/* Info Sections */}
              <div className="space-y-6 pt-4 border-t border-dark-highlight">
                <div>
                  <h4 className="text-sm font-light text-white mb-3 tracking-widest">MIX師からの内容</h4>
                  <ul className="space-y-2 text-xs text-text-secondary font-light">
                    <li>• エディット(ピッチ、タイミング補正)</li>
                    <li>• ミキシング</li>
                    <li>• エフェクト演出</li>
                    <li>• 空間演出</li>
                    <li>• ハモリ生成</li>
                    <li>• マスタリング(YouTube向け)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-light text-white mb-3 tracking-widest">納品形式</h4>
                  <p className="text-xs text-text-secondary font-light">WAV 24bit/48kHz</p>
                </div>

                <div>
                  <h4 className="text-sm font-light text-white mb-3 tracking-widest">送っていただくデータ</h4>
                  <ul className="space-y-2 text-xs text-text-secondary font-light">
                    <li>• Vocal：WAV 24bit/48kHz 推奨、モノラル、頭出し</li>
                    <li>• Inst：本家配布のまま(原キー)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-light text-white mb-4 tracking-widest">オプション</h4>
                  <div className="space-y-3">
                    {optionChoices.map((option) => (
                      <label key={option.label} className="flex items-start gap-3 cursor-pointer p-3 bg-dark-bg hover:bg-dark-highlight/50 transition-colors rounded">
                        <input
                          type="checkbox"
                          checked={vocalMixData.options.includes(option.label)}
                          onChange={() => {
                            const opts = vocalMixData.options.includes(option.label)
                              ? vocalMixData.options.filter(o => o !== option.label)
                              : [...vocalMixData.options, option.label]
                            handleVocalMixChange('options', opts)
                          }}
                          className="w-4 h-4 accent-white rounded mt-0.5 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className="text-xs text-text-secondary font-light flex items-center justify-between">
                            <span>{option.label}</span>
                            <span className="text-white">{option.price}</span>
                          </p>
                          <p className="text-xs text-text-tertiary font-light mt-1">{option.description}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                  <input type="hidden" name="vocal_options" value={vocalMixData.options.join(', ')} />
                </div>

                <div>
                  <h4 className="text-sm font-light text-white mb-2 tracking-widest">注意</h4>
                  <p className="text-xs text-text-secondary font-light">ハモリ生成、ガイド制作はオリジナルの完全再現ではありません</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Bocaro MV Fields */}
          {selectedService === 'ボカロMV' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-8 pt-8 border-t border-dark-highlight"
            >
              {/* Song Name */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
                  曲名 *
                </label>
                <input
                  type="text"
                  value={bocaroMVData.songName}
                  onChange={(e) => handleBocaroMVChange('songName', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
                />
                <input type="hidden" name="mv_songName" value={bocaroMVData.songName} />
              </div>

              {/* Deadline */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
                  納品希望日 *
                </label>
                <input
                  type="date"
                  value={bocaroMVData.deadline}
                  onChange={(e) => handleBocaroMVChange('deadline', e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm"
                  style={{ accentColor: 'white' }}
                />
                <input type="hidden" name="mv_deadline" value={bocaroMVData.deadline} />
              </div>

              {/* Reference Video */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
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

              {/* Shared Data */}
              <div>
                <label className="block text-xs font-light text-text-secondary mb-2 tracking-widest uppercase">
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

              {/* Include Vocal Mix */}
              <label className="flex items-center gap-3 cursor-pointer pt-4 border-t border-dark-highlight">
                <input
                  type="checkbox"
                  checked={bocaroMVData.includeVocalMix}
                  onChange={(e) => handleBocaroMVChange('includeVocalMix', e.target.checked)}
                  className="w-4 h-4 accent-white rounded"
                />
                <span className="text-sm font-light text-text-secondary">Mixも同時に依頼する</span>
              </label>
              <input type="hidden" name="mv_includeVocalMix" value={bocaroMVData.includeVocalMix} />

              {/* MIX Information - Only show when checked */}
              {bocaroMVData.includeVocalMix && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 pt-8 border-t border-dark-highlight"
                >
                  {/* Menu Selection for MIX */}
                  <div>
                    <label className="block text-xs font-light text-text-secondary mb-3 tracking-widest uppercase">
                      MIXメニュー *
                    </label>
                    <select
                      value={bocaroMVData.mixMenu}
                      onChange={(e) => handleBocaroMVChange('mixMenu', e.target.value)}
                      className="w-full px-4 py-3 bg-dark-highlight border border-dark-highlight text-white focus:border-white focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 12px center',
                        paddingRight: '40px'
                      }}
                    >
                      {menuOptions.map((menu) => (
                        <option key={menu} value={menu}>
                          {menu}
                        </option>
                      ))}
                    </select>
                    <input type="hidden" name="mv_mixMenu" value={bocaroMVData.mixMenu} />
                  </div>

                  {/* Selected Menu Detail Card */}
                  {detailedPricingData[bocaroMVData.mixMenu] && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-dark-highlight border border-dark-highlight p-6 space-y-4"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        