'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const ENDPOINT = 'https://script.google.com/macros/s/AKfycbzrnHMFqLQDjcK-FkRQ8KdLDhR52_a0lkEfcDGuMJj-a7YpxgrE_Z3TOtPDE-7QJ4hL/exec'

export default function SiteTracker() {
  const pathname = usePathname()
  useEffect(() => {
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
            path: pathname || (typeof location !== 'undefined' ? location.pathname : ''),
            ref: typeof document !== 'undefined' ? document.referrer : '',
            t: new Date().toISOString(),
          },
        }),
      })
    } catch (e) {}
  }, [pathname])
  return null
}
