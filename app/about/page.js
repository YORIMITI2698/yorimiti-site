'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  const teamMembers = [
    {
      name: 'Kota Uehara / Kotu.',
      role: 'Drone Operator MotionGraphic',
      bio: 'ドローン空撮とアニメーション制作を中心に活動。独自の視点で、各プロジェクトの世界観を構築。',
      image: '/0006.png'
    },
    {
      name: '來世.xisz',
      role: 'Mixing&Mastering Engineer',
      bio: '元音響屋さんの現役VSinger',
      image: '/0005.png'
    }
  ]

  return (
    <motion.main
      className="bg-white"
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5, originY: 0 }}
    >
      <Navbar />

      {/* About Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-black mb-6 italic" style={{ fontFamily: 'Georgia, Garamond, serif' }}>
              About the YORIMITI
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white bg-washi-texture">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#0A0A0A' }}>
                Story
              </h2>
              <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
                <p>
                  YORIMITIは、誰もが立ち寄れる温かな居場所を目指します。
                </p>
                <p>
                  フクロウが「福を囲む鳥」と呼ばれるように、
                  <br />
                  私たちも依頼者とともに福を広げていきたい。
                </p>
                <p>
                  ロゴの黒は確固たる存在を、明るい背景は
                  <br />
                  支えてくださる方々への感謝を象徴しています。
                </p>
                <p className="pt-4">
                  私たちは、どんな時も頼れる存在でありたい。
                </p>
              </div>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="hidden lg:block"
            >
              <motion.div
                className="relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <Image
                  src="/0002.jpg"
                  alt="YORIMITI Studio"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Character Title Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-8xl md:text-9xl font-bold text-left italic"
            style={{ fontFamily: 'Georgia, Garamond, serif', color: '#0A0A0A' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Character
          </motion.h2>
        </div>
      </section>

      {/* Kota Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="hidden lg:block"
            >
              <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src={teamMembers[0]?.image || '/0006.png'}
                  alt="Kota Uehara"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {teamMembers[0]?.name}
              </h3>
              <p className="text-accent-cyan font-semibold text-lg mb-6">
                {teamMembers[0]?.role}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {teamMembers[0]?.bio}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Raisei Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {teamMembers[1]?.name}
              </h3>
              <p className="text-accent-cyan font-semibold text-lg mb-6">
                {teamMembers[1]?.role}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                {teamMembers[1]?.bio}
              </p>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="hidden lg:block"
            >
              <div className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src={teamMembers[1]?.image || '/0005.png'}
                  alt="Raisei"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
