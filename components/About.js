'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 px-4 bg-[#333333]">
      <div className="max-w-5xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-sm font-light text-gray-500 tracking-widest">02 ABOUT</span>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
              視点が変われば、<br />価値が変わる。
            </h2>

            <div className="space-y-6 text-gray-300 font-light text-base leading-relaxed">
              <p>
                YORIMITIは、映像制作・グラフィックデザイン・音声制作を統合するクリエイティブスタジオです。
              </p>
              <p>
                フクロウが「福を囲む鳥」と呼ばれるように、私たちも依頼者とともに福を広げていきたい。目的に応じて最適な表現を設計し、クリエイティブの力を価値あるカタチへと変えていきます。
              </p>
              <p>
                安全管理を徹底し、信頼されるパートナーであり続けます。
              </p>
            </div>

            <p className="mt-8 text-sm text-gray-500 font-light tracking-widest">
              TOKYO, JAPAN
            </p>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-gray-300 mb-4">🎬</div>
                <p className="text-gray-400 text-sm font-light">Creative Studio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
