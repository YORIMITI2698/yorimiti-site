'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

export default function Statement() {
  const imageRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e) => {
    if (!imageRef.current) return

    const rect = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    setMousePosition({ x: x * 20, y: y * 20 })
  }

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => {
    setIsHovering(false)
    setMousePosition({ x: 0, y: 0 })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-between overflow-hidden bg-white">

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="cursor-pointer leading-tight"
              style={{ fontFamily: 'Georgia, Garamond, serif', color: '#0A0A0A' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isHovering ? (
                <>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-light">
                    </span>
                  <span className="text-6xl md:text-7xl lg:text-8xl font-light">遊び心</span>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-light">
                    を忘れず、
                  </span>
                  <span className="text-6xl md:text-7xl lg:text-8xl font-light">創造性</span>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-light">
                    をもって目標を
                  </span>
                  <span className="text-6xl md:text-7xl lg:text-8xl font-light">達成</span>
                  <span className="text-5xl md:text-6xl lg:text-7xl font-light">
                    します。
                  </span>
                </>
              ) : (
                <span className="text-5xl md:text-6xl lg:text-7xl font-light">
                  We achieve our goals with playful spirit and sincere creativity.
                </span>
              )}
            </motion.p>
          </motion.div>

          {/* Right - Jellyfish Image with Hover Effect */}
          <Link href="/about">
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                ref={imageRef}
                className="relative h-96 overflow-hidden cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                animate={isHovering ? { scale: 1.05 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  rotateX: isHovering ? mousePosition.y : 0,
                  rotateY: isHovering ? -mousePosition.x : 0,
                  transformStyle: 'preserve-3d',
                }}
              >
                <Image
                  src="/0001.jpg"
                  alt="Jellyfish"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
