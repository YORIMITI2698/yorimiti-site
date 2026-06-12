'use client'

import { useEffect, useRef, useState } from 'react'

// Hidden ending: walk the day road to its end and the sun sets —
// the page fades into the night yorimichi (crow theme), back at the top.
// Clicking the YORIMITI logo brings the morning back.
export default function EndOfRoad() {
  const ref = useRef(null)
  const [armed, setArmed] = useState(false)
  const [prog, setProg] = useState(0)
  const [fading, setFading] = useState(false)
  const [night, setNight] = useState(false)

  // track day/night via the html.dark class
  useEffect(() => {
    const update = () => setNight(document.documentElement.classList.contains('dark'))
    update()
    const obs = new MutationObserver(update)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

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
    if (!armed || night || fading) {
      if (!fading) setProg(0)
      return
    }
    const t0 = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - t0) / 2000, 1)
      setProg(p)
      if (p >= 1) {
        // dusk falls
        setFading(true)
        setTimeout(() => {
          sessionStorage.setItem('yorimichi-night', '1')
          document.documentElement.classList.add('dark')
          window.scrollTo({ top: 0, behavior: 'auto' })
          setTimeout(() => setFading(false), 150)
        }, 750)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [armed, night])

  return (
    <>
      <section
        ref={ref}
        className="relative bg-ink dark:bg-[#171a26] border-t border-line dark:border-[#343a4d] py-14 px-4 overflow-hidden"
      >
        <div className="max-w-xl mx-auto flex flex-col items-center gap-4">
          {night ? (
            <p className="tc text-[11px] text-[#9aa0b0] tracking-[0.35em]">
              夜のよりみちは、ふけていく ─
            </p>
          ) : (
            <>
              <p className="tc text-[11px] text-mute tracking-[0.35em]">
                この先も、よりみちはつづく
              </p>

              {/* the road grows toward dusk */}
              <div className="relative w-full h-4 flex items-center">
                <div className="absolute inset-x-0 h-[2px] trail-h opacity-50" />
                <div
                  className="absolute left-0 h-[2px] bg-beni"
                  style={{ width: `${prog * 100}%` }}
                />
                <span
                  className="absolute -translate-x-1/2 text-beni text-xs"
                  style={{ left: `${prog * 100}%` }}
                >
                  ➤
                </span>
              </div>

              <p
                className="tc text-[11px] text-mute/80 tracking-[0.3em] transition-opacity duration-500"
                style={{ opacity: armed ? 1 : 0 }}
              >
                ─ 陽が傾いていく ─
              </p>
            </>
          )}
        </div>
      </section>

      {/* dusk overlay */}
      <div
        className="fixed inset-0 z-[60] bg-[#171a26] pointer-events-none transition-opacity duration-700"
        style={{ opacity: fading ? 1 : 0 }}
      />
    </>
  )
}
