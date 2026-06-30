'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ENDPOINT = 'https://script.google.com/macros/s/AKfycbzrnHMFqLQDjcK-FkRQ8KdLDhR52_a0lkEfcDGuMJj-a7YpxgrE_Z3TOtPDE-7QJ4hL/exec'

function getVid() {
  try {
    let v = localStorage.getItem('yv_vid')
    if (!v) {
      v = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : (String(Date.now()) + Math.random().toString(36).slice(2))
      localStorage.setItem('yv_vid', v)
    }
    return v
  } catch (e) { return '' }
}

async function getGeo() {
  try {
    const cached = localStorage.getItem('yv_geo')
    if (cached) return JSON.parse(cached)
    const r = await fetch('https://ipwho.is/')
    const j = await r.json()
    const g = {
      country: j.country || '',
      cc: j.country_code || '',
      region: j.region || '',
      city: j.city || '',
    }
    localStorage.setItem('yv_geo', JSON.stringify(g))
    return g
  } catch (e) { return { country: '', cc: '', region: '', city: '' } }
}

export default function SiteTracker() {
  const pathname = usePathname()
  useEffect(() => {
    let stop = false
    ;(async () => {
      const vid = getVid()
      const g = await getGeo()
      if (stop) return
      try {
        fetch(ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({
            action: 'save',
            type: 'pageviews',
            record: {
              id: Date.now() * 1000 + Math.floor(Math.random() * 1000),
              vid: vid,
              path: pathname || (typeof location !== 'undefined' ? location.pathname : ''),
              ref: typeof document !== 'undefined' ? document.referrer : '',
              t: new Date().toISOString(),
              country: g.country, cc: g.cc, region: g.region, city: g.city,
            },
          }),
        })
      } catch (e) {}
    })()
    return () => { stop = true }
  }, [pathname])
  return null
}
