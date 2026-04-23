'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'

const services = [
  {
    icon: '🚁',
    title: 'Drone Operation',
    description: 'ドローン空撮による迫力あるビジュアル制作。'
  },
  {
    icon: '📹',
    title: 'Shooting & Editing',
    description: '広告・SNS・YouTubeなどの高品質撮影と、動画の高品質編集サービス。'
  }
]

// ========================================
// LAYOUT PATTERN SELECTION
// ========================================
// ユーザーが使用するレイアウトパターンを選択してください
// 'A' | 'B' | 'C' | 'D'
const SELECTED_LAYOUT = 'B'
// ========================================

export default function Services() {
  const [backgroundColor, setBackgroundColor] = useState('#0a0a0a')

  // YORIMITI graphic image hover effect
  const yorimitiImageRef = useRef(null)
  const [yorimitiMousePosition, setYorimitiMousePosition] = useState({ x: 0, y: 0 })
  const [yorimitiIsHovering, setYorimitiIsHovering] = useState(false)

  const handleYORIMITIImageMouseMove = (e) => {
    if (!yorimitiImageRef.current) return

    const rect = yorimitiImageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setYorimitiMousePosition({ x: x * 20, y: y * 20 })
  }

  const handleYORIMITIImageEnter = () => {
    setYorimitiIsHovering(true)
  }

  const handleYORIMITIImageLeave = () => {
    setYorimitiIsHovering(false)
    setYorimitiMousePosition({ x: 0, y: 0 })
  }

  const handleYORIMITIHover = (isHovering) => {
    setBackgroundColor(isHovering ? '#0f0f1e' : '#0a0a0a')
  }

  return (
    <section
      className="py-20 transition-colors duration-300"
      style={{ backgroundColor }}
    >
      <div className="max-w-full mx-auto px-4 lg:px-12">

        {/*
          ========================================
          パターンA（現在のもの）
          ========================================
          特徴: 4行レイアウト、異なるアスペクト比と列幅
          - Drone Operation：16:9（大）、col-span-2
          - Shooting：4:3（小）、h-80、col-span-2
          - Editing：5:4（中）、col-span-2
          - YORIMITI graphic：3:2（大）、col-span-2
        */}
        {SELECTED_LAYOUT === 'A' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
              {/* Drone Operation - Left Image (Large, 16:9) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-2"
              >
                <div className="relative aspect-[16/9] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0010.jpg"
                    alt="Drone Operation Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Drone Operation - Right Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Drone Operation
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  ドローン空撮による迫力あるビジュアル制作。
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
              {/* Shooting - Left Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Shooting
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  広告・SNS・YouTubeなどの高品質撮影サービス。
                </p>
              </motion.div>

              {/* Shooting - Right Image (Small, 4:3, h-80) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-2"
              >
                <div className="relative aspect-[4/3] h-80 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0007.jpeg"
                    alt="Shooting Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 items-start">
              {/* Editing - Left Image (Medium, 5:4) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-2"
              >
                <div className="relative aspect-[5/4] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0009.jpeg"
                    alt="Editing Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Editing - Right Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center lg:col-span-2"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Editing
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  ボカロMV、通常動画の高品質編集。
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* YORIMITI graphic - Left Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  YORIMITI graphic
                </h3>
                <p className="text-lg text-accent-cyan font-semibold mb-6">
                  映像,MIX
                </p>
                <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                  <p>
                    ボカロMV、リリックビデオからオリジナルMVまで、多様な作品を制作。
                  </p>
                  <p>
                    実写＋イラストの合成など幅広い楽曲のMVに対応します。
                  </p>
                </div>
              </motion.div>

              {/* YORIMITI graphic - Right Image (Large, 3:2) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-2"
              >
                <div className="relative aspect-[3/2] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0008.jpg"
                    alt="YORIMITI graphic Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </>
        )}

        {/*
          ========================================
          パターンB - 統一された3列グリッド、異なるアスペクト比
          ========================================
          特徴: すべて3列グリッドで配置、各サービスが統一されたサイズで並ぶ
          - Drone Operation：1:1（正方形）
          - Shooting：16:9（ワイド）
          - Editing：4:3
          - YORIMITI graphic：3:2
        */}
        {SELECTED_LAYOUT === 'B' && (
          <>
            {/* Row 1: Drone Operation */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block"
              >
                <div className="relative aspect-[1/1] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0010.jpg"
                    alt="Drone Operation Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center lg:col-span-2"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Drone Operation
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  ドローン空撮による迫力あるビジュアル制作。
                </p>
              </motion.div>
            </div>

            <div className="mb-40"></div>

            {/* Row 2: Shooting & Editing */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-48 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Shooting & Editing
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  広告・SNS・YouTubeなどの高品質撮影サービス。
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mt-4">
                  ボカロMV、通常動画の高品質編集。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-2"
              >
                <div className="relative aspect-[16/9] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0007.jpeg"
                    alt="Shooting Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Row 4: YORIMITI graphic */}
            <Link href="/graphic-service" className="block">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start cursor-pointer">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-center"
                >
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    YORIMITI graphic
                  </h3>
                  <p className="text-lg text-accent-cyan font-semibold mb-6">
                    映像,MIX
                  </p>
                  <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                    <p>
                      ボカロMV、リリックビデオからオリジナルMVまで、多様な作品を制作。
                    </p>
                    <p>
                      実写＋イラストの合成など幅広い楽曲のMVに対応します。
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="hidden lg:block lg:col-span-2 rounded-lg"
                >
                  <div className="relative aspect-[3/2] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow rounded-lg">
                    <Image
                      src="/0008.jpg"
                      alt="YORIMITI graphic Service"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </Link>
          </>
        )}

        {/*
          ========================================
          パターンC - 2列グリッド、大小交互
          ========================================
          特徴: 左右交互に配置、大サイズと小サイズを交互に
          より整理された印象、コンパクトなレイアウト
        */}
        {SELECTED_LAYOUT === 'C' && (
          <>
            {/* Row 1: Drone Operation - Large */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block"
              >
                <div className="relative aspect-[16/9] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0010.jpg"
                    alt="Drone Operation Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Drone Operation
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  ドローン空撮による迫力あるビジュアル制作。
                </p>
              </motion.div>
            </div>

            {/* Row 2: Shooting - Small (reversed) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center lg:order-2"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Shooting
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  広告・SNS・YouTubeなどの高品質撮影サービス。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:order-1"
              >
                <div className="relative aspect-[4/3] h-64 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0007.jpeg"
                    alt="Shooting Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Row 3: Editing - Large */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block"
              >
                <div className="relative aspect-[5/4] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0009.jpeg"
                    alt="Editing Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Editing
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed">
                  ボカロMV、通常動画の高品質編集。
                </p>
              </motion.div>
            </div>

            {/* Row 4: YORIMITI graphic - Medium (reversed) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center lg:order-2"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  YORIMITI graphic
                </h3>
                <p className="text-lg text-accent-cyan font-semibold mb-6">
                  映像,MIX
                </p>
                <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
                  <p>
                    ボカロMV、リリックビデオからオリジナルMVまで、多様な作品を制作。
                  </p>
                  <p>
                    実写＋イラストの合成など幅広い楽曲のMVに対応します。
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:order-1"
              >
                <div className="relative aspect-[3/2] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0008.jpg"
                    alt="YORIMITI graphic Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </>
        )}

        {/*
          ========================================
          パターンD - 非対称マスレイアウト
          ========================================
          特徴: 異なるグリッド幅を使用した非対称配置
          - Drone Operation：4列中3列（大）
          - Shooting：4列中1列（小）
          - Editing：4列中2列（中）
          - YORIMITI graphic：4列中2列（中）
        */}
        {SELECTED_LAYOUT === 'D' && (
          <>
            {/* Row 1: Drone Operation (3/4) + Shooting (1/4) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-3"
              >
                <div className="relative aspect-[16/9] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0010.jpg"
                    alt="Drone Operation Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Drone Operation
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  ドローン空撮による迫力あるビジュアル制作。
                </p>
              </motion.div>
            </div>

            {/* Row 2: Shooting (1/4) + Editing (2/4) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Shooting
                </h3>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  広告・SNS・YouTubeなどの高品質撮影サービス。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-3"
              >
                <div className="relative aspect-[5/4] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0007.jpeg"
                    alt="Shooting Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Row 3: Editing (2/4) + YORIMITI (2/4) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0009.jpeg"
                    alt="Editing Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="hidden lg:block lg:col-span-2"
              >
                <div className="relative aspect-[3/2] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Image
                    src="/0008.jpg"
                    alt="YORIMITI graphic Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Text sections for Editing and YORIMITI below images */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-start lg:col-span-2"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Editing
                </h3>
                <p className="text-base text-text-secondary leading-relaxed">
                  ボカロMV、通常動画の高品質編集。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col justify-start lg:col-span-2"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                  YORIMITI graphic
                </h3>
                <p className="text-base text-accent-cyan font-semibold mb-4">
                  映像,MIX
                </p>
                <div className="space-y-3 text-base text-text-secondary leading-relaxed">
                  <p>
                    ボカロMV、リリックビデオからオリジナルMVまで、多様な作品を制作。
                  </p>
                  <p>
                    実写＋イラストの合成など幅広い楽曲のMVに対応します。
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            