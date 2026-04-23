'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

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
        { name: 'Instagram', url: 'https://www.instagram.com/kota12698/', icon: faInstagram, label: 'Instagram' }
      ]
    },
    {
      name: '來世（LiESE）',
      nameEn: 'LiESE',
      nickname: 'xisz',
      roles: ['Vsinger', 'Vocal Mix Engineer'],
      bio: '2025年4月4日 デビュー\nVOIDLAB.代表',
      image: '/0005.png',
      socials: [
        { name: 'Twitter', url: 'https://twitter.com/xisz_', icon: faXTwitter, label: '@xisz_' },
        { name: 'YouTube', url: 'https://youtube.com/@xisz_', icon: faYoutube, label: 'YouTube' },
        { name: 'VOIDLAB', url: 'https://void-lab.netlify.app/', icon: faLink, label: 'VOIDLAB' }
      ]
    }
  ]

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* ABOUT Title */}
      <section className="pt-20 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-light text-white mb-12"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About YORIMITI
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-dark-bg border-y border-dark-highlight">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.h2
                className="text-4xl md:text-5xl font-light mb-8 text-white"
                style={{ fontFamily: 'Georgia, serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Story
              </motion.h2>
              <div className="space-y-4 text-text-secondary leading-relaxed text-sm md:text-base max-w-xl">
                <p>
                  YORIMITIは、誰もが立ち寄れる温かな居場所を目指します。
                </p>
                <p>
                  フクロウが「福を囲む鳥」と呼ばれるように、私たちも依頼者とともに福を広げていきたい。
                </p>
                <p>
                  ロゴの黒は確固たる存在を、明るい背景は支えてくださる方々への感謝を象徴しています。
                </p>
                <p className="pt-2">
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
              className="hidden lg:flex items-start justify-end"
            >
              <motion.div
                className="relative w-64 h-64 rounded-xl overflow-hidden border border-dark-highlight flex-shrink-0"
                whileHover={{ borderColor: '#ffffff' }}
              >
                <Image
                  src="/0002.JPG"
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
      <section className="py-24 px-4 bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-light text-white mb-16"
            style={{ fontFamily: 'Georgia, serif' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Member
          </motion.h2>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:order-3' : 'lg:order-1'}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-56 h-56 rounded-xl overflow-hidden border border-dark-highlight bg-dark-highlight">
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
                <motion.div className={index % 2 === 1 ? 'lg:order-1 lg:col-span-2' : 'lg:order-2 lg:col-span-2'}>
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
                    <div className="flex flex-wrap gap-6">
                      {member.socials.map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-3 px-6 py-6 border border-dark-highlight rounded text-text-secondary hover:text-white hover:border-white transition-all font-light"
                          whileHover={{ backgroundColor: '#1a1a1a' }}
                        >
                          <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                          <span className="text-xs text-center">{social.label}</span>
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
