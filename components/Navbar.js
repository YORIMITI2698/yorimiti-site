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
  const pathname = usePathname()
  const isHome = pathname === '/'

  // 夜のよりみち (crow theme) is a hidden, HOME-only experience.
  // It is entered by walking the day road to its end (see EndOfRoad).
  useEffect(() => {
    localStorage.removeItem('yorimichi-night') // clean up old persisted key
    const night = sessionStorage.getItem('yorimichi-night') === '1'
    document.documentElement.classList.toggle('dark', night && isHome)
  }, [isHome])

  // Clicking the YORIMITI logo brings the morning back.
  const resetToDay = () => {
    sessionStorage.removeItem('yorimichi-night')
    document.documentElement.classList.remove('dark')
  }

  return (
    <nav className="fixed top-0 w-full bg-ink/90 dark:bg-[#171a26]/90 backdrop-blur-md z-50 border-b border-line dark:border-[#343a4d]">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo (owl by day) */}
          <Link href="/" onClick={resetToDay} className="flex items-center gap-3 hover:opacity-75 transition-opacity">
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
