'use client'

// Watercolor washes bleeding into washi paper.
// Replaces the dark grunge background video — pure CSS, zero load weight.
const blobs = [
  { c: 'rgba(107,142,15,0.16)', w: '46vw', h: '40vw', top: '-8%', left: '-10%', anim: 'washi1 26s', delay: '0s' },
  { c: 'rgba(167,211,33,0.13)', w: '38vw', h: '34vw', top: '30%', left: '62%', anim: 'washi2 32s', delay: '-8s' },
  { c: 'rgba(42,39,35,0.07)',  w: '30vw', h: '28vw', top: '58%', left: '8%',  anim: 'washi3 38s', delay: '-15s' },
  { c: 'rgba(194,69,31,0.07)', w: '24vw', h: '22vw', top: '6%',  left: '55%', anim: 'washi2 29s', delay: '-20s' },
  { c: 'rgba(107,142,15,0.10)', w: '34vw', h: '30vw', top: '70%', left: '60%', anim: 'washi1 35s', delay: '-5s' },
]

export default function WashiBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {blobs.map((b, i) => (
        <span
          key={i}
          className="washi-blob"
          style={{
            background: `radial-gradient(closest-side, ${b.c}, transparent 72%)`,
            width: b.w,
            height: b.h,
            top: b.top,
            left: b.left,
            animation: `${b.anim} ease-in-out infinite alternate`,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  )
}
