'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

// 月のよりみち — the hidden ABOUT, reached by clicking the moon at night.
const stars = Array.from({ length: 26 }, (_, i) => ({
  top: `${(i * 37) % 92}%`,
  left: `${(i * 53 + 11) % 97}%`,
  d: `${2.2 + (i % 5) * 0.6}s`,
  delay: `${-(i % 7) * 0.7}s`,
  size: i % 6 === 0 ? 3 : 2,
}))

const craters = [
  { top: '18%', left: '14%', s: 70, o: 0.5 },
  { top: '46%', left: '64%', s: 110, o: 0.45 },
  { top: '64%', left: '28%', s: 54, o: 0.5 },
  { top: '28%', left: '78%', s: 40, o: 0.4 },
  { top: '70%', left: '80%', s: 64, o: 0.42 },
]

export default function Moon() {
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
    <main className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(180deg, #07090f 0%, #0e1018 45%, #151827 100%)' }}>
      {/* stars */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDuration: s.d, animationDelay: s.delay }}
          />
        ))}
        {/* the earth, far away */}
        <span
          className="absolute top-[12%] left-[8%] w-10 h-10 rounded-full opacity-80"
          style={{ background: 'radial-gradient(circle at 35% 35%, #9fc7e8, #3b6ea5 55%, #1d3a5f 80%)', boxShadow: '0 0 30px 6px rgba(110,160,210,0.25)' }}
        />
      </div>

      {/* minimal header */}
      <nav className="fixed top-0 w-full z-50 bg-[#0b0d16]/80 backdrop-blur-md border-b border-[#2a3046]">
        <div className="w-full px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => { sessionStorage.removeItem('yorimichi-night'); document.documentElement.classList.remove('dark') }}
            className="flex items-center gap-3 hover:opacity-75 transition-opacity"
          >
            <span className="bg-white rounded-md p-0.5 inline-flex">
              <Image src="/yorimiti-logo.png" alt="YORIMITI Logo" width={36} height={36} priority className="w-9 h-9" />
            </span>
            <span className="font-disp font-light text-sm tracking-[0.3em] text-[#e9e7f0] hidden sm:inline">YORIMITI</span>
          </Link>
          <Link
            href="/"
            className="tc text-[10px] tracking-[0.3em] text-[#9aa0b0] hover:text-[#e3c567] transition-colors"
          >
            ← 夜へもどる
          </Link>
        </div>
      </nav>

      {/* ===== Hero: the moon itself ===== */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center px-4 pt-24">
        <motion.div
          className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'radial-gradient(circle at 36% 34%, #fdf7e4, #ead9a8 48%, #cdb87e 78%, #a8945c 100%)',
            boxShadow: '0 0 120px 36px rgba(227,197,103,0.22), inset -18px -14px 60px rgba(120,100,50,0.35)',
          }}
        >
          {/* craters */}
          {craters.map((c, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{
                top: c.top, left: c.left, width: c.s, height: c.s, opacity: c.o,
                background: 'radial-gradient(circle at 40% 35%, rgba(120,100,50,0.55), rgba(160,140,90,0.25) 60%, transparent 75%)',
                boxShadow: 'inset 3px 3px 8px rgba(90,75,40,0.5)',
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="tc text-[11px] text-[#e3c567] tracking-[0.5em] mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          − 月でのよりみち −
        </motion.p>
        <motion.h1
          className="font-disp font-light text-4xl sm:text-6xl tracking-[0.15em] text-[#e9e7f0] mt-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          About YORIMITI
        </motion.h1>
      </section>

      {/* ===== Story ===== */}
      <section className="relative py-24 px-4 border-y border-[#2a3046]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-disp text-4xl md:text-5xl font-light mb-8 text-[#e9e7f0] tracking-[0.1em]">
                Story
              </h2>
              <div className="space-y-4 text-[#9aa0b0] leading-relaxed text-sm md:text-base max-w-xl">
                <p>YORIMITIは、誰もが立ち寄れる温かな居場所を目指します。</p>
                <p>フクロウが「福を囲む鳥」と呼ばれるように、私たちも依頼者とともに福を広げていきたい。</p>
                <p>ロゴの黒は確固たる存在を、明るい背景は支えてくださる方々への感謝を象徴しています。</p>
                <p className="pt-2">私たちは、どんな時も頼れる存在でありたい。</p>
              </div>
            </motion.div>

            {/* porthole studio image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-start justify-end"
            >
              <div
                className="relative w-64 h-64 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#e3c567]/40"
                style={{ boxShadow: '0 0 40px 8px rgba(227,197,103,0.12)' }}
              >
                <Image src="/0002.JPG" alt="YORIMITI Studio" fill className="object-cover" priority />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Member ===== */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2
            className="font-disp font-light text-5xl md:text-7xl tracking-[0.12em] text-[#e9e7f0] mb-16"
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
                className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start p-8 sm:p-10 rounded-2xl border border-[#2a3046] bg-[#11141f]/70 backdrop-blur-sm"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image in a crater ring */}
                <motion.div
                  className={index % 2 === 1 ? 'lg:order-3' : 'lg:order-1'}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-[#e3c567]/35 bg-[#1a1e2e]"
                    style={{ boxShadow: '0 0 36px 6px rgba(227,197,103,0.1)' }}
                  >
                    <Image src={member.image} alt={member.name} fill className="object-cover" priority />
                  </div>
                </motion.div>

                {/* Text */}
                <div className={index % 2 === 1 ? 'lg:order-1 lg:col-span-2' : 'lg:order-2 lg:col-span-2'}>
                  <h3 className="text-3xl md:text-4xl font-light text-[#e9e7f0] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#6e7488] mb-4">
                    {member.nameEn} / {member.nickname}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 border border-[#e3c567]/40 text-[#e3c567] rounded-full"
                      >
                        {role}
                      </span>
                    ))}
                  </div>

                  <p className="text-base text-[#9aa0b0] leading-relaxed mb-8 whitespace-pre-line">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-6">
                    {member.socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-3 px-6 py-6 border border-[#2a3046] rounded text-[#9aa0b0] hover:text-[#e3c567] hover:border-[#e3c567]/60 hover:bg-[#171b29] transition-all font-light"
                      >
                        <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                        <span className="text-xs text-center">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== moon-surface footer ===== */}
      <footer className="relative pt-28 pb-12 px-4 overflow-hidden">
        {/* surface arc */}
        <div
          className="absolute -bottom-[46vw] left-1/2 -translate-x-1/2 w-[160vw] h-[60vw] rounded-[50%] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 18%, #efe3bd, #cdb87e 40%, #a8945c 72%)',
            boxShadow: '0 -10px 80px rgba(227,197,103,0.2)',
            opacity: 0.92,
          }}
        />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <Link
            href="/"
            className="tc text-[10px] tracking-[0.35em] text-[#171a26] hover:opacity-70 transition-opacity"
          >
            ← 夜のよりみちへ もどる
          </Link>
          <p className="tc text-[10px] tracking-[0.25em] text-[#171a26]/70">
            &copy; 2026 YORIMITI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
