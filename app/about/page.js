'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function About() {
  const teamMembers = [
    {
      name: '上原幸大',
      nameEn: 'Kota Uehara',
      nickname: 'Kotu.',
      roles: ['Drone Operator', 'Motion Graphic'],
      bio: 'ドローン空撮とアニメーション制作を中心に活動。独自の視点で、各プロジェクトの世界観を構築。',
      image: '/0006.png',
      socials: [
        { name: 'Instagram', url: 'https://www.instagram.com/kota12698/', icon: '📷' }
      ]
    },
    {
      name: '來世（LiESE）',
      nameEn: 'LiESE',
      nickname: 'xisz',
      roles: ['Vsinger', 'Vocal Mix Engineer'],
      bio: '2025年4月4日 デビュー',
      image: '/0005.png',
      socials: [
        { name: 'Twitter', url: 'https://twitter.com/xisz_', icon: '𝕏' },
        { name: 'YouTube', url: 'https://youtube.com/@xisz_', icon: '▶️' }
      ]
    }
  ]

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* About Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-highlight">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            className="text-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-light leading-tight text-white mb-8"
              style={{ fontFamily: 'Georgia, serif' }}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About <span className="text-text-secondary">YORIMITI</span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-4 bg-dark-bg border-y border-dark-highlight">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-5xl md:text-6xl font-light mb-12 text-white"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Story
              </motion.h2>
              <div className="space-y-6 text-text-secondary leading-relaxed text-sm md:text-base">
                <p>
                  YORIMITIは、誰もが立ち寄れる温かな居場所を目指します。
                </p>
                <p>
                  フクロウが「福を囲む鳥」と呼ばれるように、<br className="hidden md:block" />
                  私たちも依頼者とともに福を広げていきたい。
                </p>
                <p>
                  ロゴの黒は確固たる存在を、明るい背景は<br className="hidden md:block" />
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
              className="hidden lg:block"
            >
              <motion.div
                className="relative h-96 rounded-xl overflow-hidden border border-dark-highlight"
                whileHover={{ borderColor: '#1a1a1a' }}
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

      {/* Member Section */}
      <section className="py-32 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-24"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Member
          </motion.h2>

          <div className="space-y-32">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.div
                  className={index % 2 === 1 ? 'order-2' : 'order-1'}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-dark-highlight bg-dark-highlight">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div className={index % 2 === 1 ? 'order-1' : 'order-2'}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-light text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                      {member.name}
                    </h3>
                    <p className="text-sm text-text-tertiary mb-4">
                      {member.nameEn} / {member.nickname}
                    </p>

                    {/* Roles */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {member.roles.map((role, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 border border-dark-highlight text-text-secondary rounded-full"
                        >
                          {role}
                        </span>
                      ))}
                    </div>

                    {/* Bio */}
                    <p className="text-base text-text-secondary leading-relaxed mb-8">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      {member.socials.map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center border border-dark-highlight rounded-full text-text-secondary hover:text-white hover:border-white transition-all"
                          whileHover={{ scale: 1.1, backgroundColor: '#1a1a1a' }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
