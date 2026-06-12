'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

// When you reach the end of the page, the road continues — onto the next page.
export default function EndOfRoad({ href = '/works', label = 'WORKS' }) {
  const ref = useRef(null)
  const router = useRouter()
  const [armed, setArmed] = useState(false)
  const [prog, setProg] = useState(0)
  const navigatedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => setArmed(e.intersectionRatio > 0.85),
      { threshold: [0, 0.85, 1] }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!armed) {
      setProg(0)
      return
    }
    const t0 = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - t0) / 2000, 1)
      setProg(p)
      if (p >= 1) {
        if (!navigatedRef.current) {
          navigatedRef.current = true
          router.push(href)
        }
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [armed, href, router])

  return (
    <section
      ref={ref}
      className="relative bg-ink dark:bg-[#171a26] border-t border-line dark:border-[#343a4d] py-14 px-4 overflow-hidden"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
        <p className="tc text-[11px] text-mute dark:text-[#9aa0b0] tracking-[0.35em]">
          この先も、よりみちはつづく
        </p>

        {/* the road grows toward the next page */}
        <div className="relative w-full h-4 flex items-center">
          <div className="absolute inset-x-0 h-[2px] trail-h opacity-50" />
          <div
            className="absolute left-0 h-[2px] bg-beni dark:bg-[#e3c567] transition-none"
            style={{ width: `${prog * 100}%` }}
          />
          <span
            className="absolute -translate-x-1/2 text-beni dark:text-[#e3c567] text-xs"
            style={{ left: `${prog * 100}%` }}
          >
            ➤
          </span>
        </div>

        <p className="tc text-[11px] text-fog/70 dark:text-[#e8e6df]/70 tracking-[0.3em]">
          そのまま進むと <span className="text-beni dark:text-[#e3c567]">{label}</span> へ
        </p>
      </div>
    </section>
  )
}
