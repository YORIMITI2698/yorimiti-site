'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'
import WashiBackground from '@/components/mv/WashiBackground'
import { useState, useEffect } from 'react'
import { DroneArt } from '@/components/mv/RoadsideArt'

export default function Services() {
  const [selectedType, setSelectedType] = useState('Drone Operation')

  useEffect(() => {
    const svc = new URLSearchParams(window.location.search).get('service')
    if (svc === 'relocus') setSelectedType('RE::Locus')
  }, [])

  const services = [
    {
      name: 'Drone Operation',
      sections: [
        {
          title: 'SERVICE・Drone',
          content: `私たちは、ドローンによる映像撮影を行っています。
安定型ドローンと自作FPVドローンを駆使し、CM、MVを始めとしLIVE、イベントなど、現場に合わせた柔軟な撮影が可能です。
徹底した安全管理のもと、他では難しい場所での撮影や、求めるクオリティーに応えるための代替案なども臨機応変にご提案します。`
        },
        {
          title: '安定型ドローンによる空撮',
          images: ['/drone-stable-2.png', '/drone-stable.png'],
          content: `高い安定性を持つ機体を使用し、ブレのない美しく落ち着いた映像を撮影します。
最大8Kの高解像度撮影に対応しており、映画やCM、記念行事の記録など、ディテールまで美しく残したい大切なシーンに最適です。
広角から望遠、レンズ交換式の機体まで幅広く駆使することで、壮大な風景を捉える引きのカットから、被写体にフォーカスした寄りのカットまで、多種多様な画角で理想の表現を形にします。`
        },
        {
          title: 'FPVドローン撮影とは？',
          images: ['/drone-fpv-1.png', '/drone-fpv-2.png', '/drone-fpv-3.png'],
          content: `FPVとは「First Person View（一人称視点）」の略です。
パイロットがゴーグルを着用し、ドローンが見ている景色をリアルタイムで確認しながら「完全マニュアル」で操縦します。
まるで自分が鳥になって空を飛んでいるかのような、臨場感あふれるダイナミックな映像表現が可能です。被写体のすぐ近くを並走したり、建物や木々の狭い隙間を鮮やかにすり抜けたりと、通常のドローンでは表現できない、自由で迫力のある視点をお届けします。`
        },
        {
          title: '航空法・申請',
          content: `各機体は航空法の年間包括申請を取得済みです。
航空法に関する国交省申請はロケーションに合わせて弊社から申請させていただきます。
※ 2～3週間程度申請に時間を要するためお早めにご相談ください。`
        },
        {
          title: '保険',
          content: `リスク管理・安全対策を前提に状況に応じた柔軟な対応で撮影を進めます。
万が一に備え、賠償責任保険にも加入済みです。`
        }
      ]
    },
    {
      name: 'RE::Locus',
      displayName: 'RE::Locus / Motion | MIX',
      image: '/icon2.png',
      sections: [
        {
          title: '',
          content: `RE::Locus（リ・ローカス）
RE::Locusは、YORIMITIのグラフィック特化型チームです。
チーム名には、納得がいくまで試行錯誤（RE）を重ねて確かな軌跡（Locus）を描き、ご依頼主さまと私たちの「点」と「点」を結んで一本の「線（作品）」にしていきたい、という想いが込められています。
私たちは、ボカロMVをはじめとしたモーショングラフィックス（Motion Graphics）の制作や、音源のMIX（ミックス）のご依頼を承っています。映像と音の力を掛け合わせ、作品の世界観をより深く、魅力的に表現します。`
        },
        {
          title: 'アニメーションMVの制作',
          content: `ボカロPや「歌ってみた」などの活動を行うクリエイター向けの映像制作サービスです。
リリックモーションMV（歌詞アニメーション）をはじめ、リスペクトを込めた本家再現MVから、楽曲の世界観をゼロから構築する完全オリジナルMVまで幅広く対応しています。音楽に込められたストーリーや感情を丁寧に汲み取り、リスナーの心に深く届く映像を形にします。`
        },
        {
          title: '楽曲MIX・マスタリング（提携：VOiD-LAB.）',
          content: `提携スタジオ「VOiD-LAB.」との連携により、MV制作と同時に楽曲のMIX（ミックス）やマスタリングも一括でご依頼いただけます。
音楽と映像の窓口を一本化することで、作品の方向性をブレさせることなく、音と映像が完璧に調和したハイクオリティな作品へと仕上げます。進行もスムーズになるため、「初めてMVを作る」という方でも安心してすべてをお任せいただけます。`,
          link: { url: 'https://void-xisz.github.io/', label: 'VOiD-LAB. 公式サイトはこちら' }
        }
      ]
    }
  ]

  const selectedService = services.find(s => s.name === selectedType)

  return (
    <main className="bg-ink min-h-screen">
      <Navbar />

      {/* Service Title */}
      <section className="pt-20 px-4 bg-ink pb-12">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="font-disp font-light text-5xl md:text-7xl tracking-[0.12em] text-fog mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SERVICE
          </motion.h1>
          <motion.p
            className="text-fog font-light text-xl md:text-3xl tracking-[0.1em] max-w-2xl mx-auto"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.2, delayChildren: 0.35 } } }}
          >
            {['カタチも、', '視点も、', 'もっと自由に。'].map((seg, k) => (
              <motion.span
                key={k}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {seg}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-16 px-4 bg-ink border-y border-dark-highlight">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.button
                key={service.name}
                onClick={() => setSelectedType(service.name)}
                className={`text-xs font-light tracking-widest px-4 py-2 rounded-full transition-all border ${
                  selectedType === service.name
                    ? 'bg-acid text-ink border-acid'
                    : 'border-dark-highlight text-text-secondary hover:border-beni hover:text-beni'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.displayName || service.name}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Content */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Video */}
        {/* Watercolor washi background */}
        <WashiBackground />

        <div className="max-w-4xl mx-auto relative z-10">
          {selectedService && (
            <motion.div
              key={selectedService.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-dark-highlight/30 backdrop-blur border border-dark-highlight rounded-lg p-12 md:p-16"
            >
              {/* Icon */}
              <div className="mb-8">
                {selectedService.image ? (
                  <Image
                    src={selectedService.image}
                    alt={selectedService.name}
                    width={80}
                    height={80}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                ) : (
                  <DroneArt className="text-fog w-28 h-auto" />
                )}
              </div>

              {/* Title */}
              <motion.h2
                className="text-4xl md:text-5xl font-light text-fog mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {selectedService.name}
              </motion.h2>

              {/* Sections (for Drone Operation and others with sections) */}
              {selectedService.sections ? (
                <motion.div
                  className="space-y-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {selectedService.sections.map((section, i) => (
                    <div key={i} className="border-b border-dark-highlight pb-8 last:border-b-0">
                      {i > 0 && <h3 className="text-xl md:text-2xl font-light text-fog mb-4">◆ {section.title}</h3>}
                      <div className={(section.image || section.images) ? 'grid md:grid-cols-2 gap-8 items-start' : ''}>
                        <div className="space-y-4">
                          {section.content.split('\n').filter(Boolean).map((para, j) => (
                            <p key={j} className="text-text-secondary font-light text-sm md:text-base leading-loose">
                              {para}
                            </p>
                          ))}
                          {section.link && (
                            <a
                              href={section.link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-beni hover:text-leaf transition-colors text-sm md:text-base font-light"
                            >
                              <span>▶</span>
                              <span className="underline underline-offset-4">{section.link.label}</span>
                            </a>
                          )}
                        </div>
                        {section.image && (
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full rounded-lg object-contain"
                          />
                        )}
                        {section.images && (
                          <div className={`grid gap-4 ${section.images.length === 2 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                            {section.images.map((src, k) => (
                              <img
                                key={k}
                                src={src}
                                alt={`${section.title} ${k + 1}`}
                                className={`w-full rounded-lg object-contain ${section.images.length === 3 && k === 0 ? 'sm:col-span-2' : ''}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <>
                  {/* Description */}
                  <p className="text-text-secondary mb-12 font-light text-base md:text-lg max-w-2xl whitespace-pre-line leading-relaxed">
                    {selectedService.description}
                  </p>

                  {/* Details */}
                  <motion.ul
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {selectedService.details.map((detail, i) => (
                      <li key={i} className="text-text-secondary text-sm md:text-base flex items-start font-light">
                        <span className="text-fog mr-4 font-light">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </motion.ul>
                </>
              )}
            </motion.div>
          )}
        </div>
      </section>

      <Footer />

      <Seekbar />
    </main>
  )
}
