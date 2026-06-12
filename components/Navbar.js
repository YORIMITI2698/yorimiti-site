'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const items = [
  { name: 'HOME', href: '/', no: '一' },
  { name: 'SERVICES', href: '/services', no: '二' },
  { name: 'WORKS', href: '/works', no: '三' },
  { name: 'CONTACT', href: '/#contact', no: '四' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [night, setNight] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  // 夜のよりみち (crow theme) is a HOME-only experience.
  useEffect(() => {
    const saved = localStorage.getItem('yorimichi-night') === '1'
    setNight(saved)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', night && isHome)
  }, [night, isHome])

  const toggleNight = () => {
    setNight((n) => {
      localStorage.setItem('yorimichi-night', !n ? '1' : '0')
      return !n
    })
  }

  return (
    <nav className="fixed top-0 w-full bg-ink/90 dark:bg-[#171a26]/90 backdrop-blur-md z-50 border-b border-line dark:border-[#343a4d]">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo (owl by day) */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-75 transition-opacity">
            <span className="dark:bg-white dark:rounded-md dark:p-0.5 inline-flex">
              <Image
                src="/yorimiti-logo.png"
                alt="YORIMITI Logo"
                width={36}
                height={36}
                priority
                className="w-9 h-9"
              />
            </span>
            <span className="font-disp font-light text-sm tracking-[0.3em] text-fog dark:text-[#e8e6df] hidden sm:inline">YORIMITI</span>
          </Link>

          <div className="flex items-center gap-5 sm:gap-8">
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-light tracking-widest text-fog/80 dark:text-[#e8e6df]/80 hover:text-beni dark:hover:text-[#e3c567] transition-colors relative group"
                >
                  <span className="text-[10px] text-beni/70 dark:text-[#e3c567]/70 mr-1.5">{item.no}</span>
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px border-b border-dashed border-beni dark:border-[#e3c567] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Day / Night toggle (HOME only): owl walks by day, crow by night */}
            {isHome && (
              <button
                onClick={toggleNight}
                aria-label={night ? '昼のよりみちへ' : '夜のよりみちへ'}
                title={night ? '昼のよりみちへ' : '夜のよりみちへ'}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line dark:border-[#343a4d] text-fog/70 dark:text-[#e3c567] hover:border-beni hover:text-beni dark:hover:border-[#e3c567] transition-colors"
              >
                {night ? (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                  </svg>
                )}
                <span className="tc text-[10px] tracking-[0.2em]">{night ? '昼' : '夜'}</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-fog dark:text-[#e8e6df]"
              aria-label="menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-line dark:border-[#343a4d]">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-xs font-light text-fog/80 dark:text-[#e8e6df]/80 hover:text-beni dark:hover:text-[#e3c567] transition-colors tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[10px] text-beni/70 dark:text-[#e3c567]/70 mr-2">{item.no}</span>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
