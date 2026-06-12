'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const items = [
  { name: 'HOME', href: '/' },
  { name: 'SERVICES', href: '/services' },
  { name: 'WORKS', href: '/works' },
  { name: 'CONTACT', href: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-ink/80 backdrop-blur-md z-50 border-b border-line">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo on white chip (logo artwork is black + chartreuse) */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="bg-white rounded-md p-1 inline-flex">
              <Image
                src="/yorimiti-logo.png"
                alt="YORIMITI Logo"
                width={32}
                height={32}
                priority
                className="w-8 h-8"
              />
            </span>
            <span className="font-disp font-bold text-sm tracking-[0.2em] text-fog hidden sm:inline">YORIMITI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {items.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-light tracking-widest text-fog/80 hover:text-acid transition-colors relative group"
              >
                <span className="tc text-[9px] text-acid/60 mr-1.5">{String(i + 1).padStart(2, '0')}</span>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-acid group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-fog"
            aria-label="menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-line">
            {items.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-xs font-light text-fog/80 hover:text-acid transition-colors tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                <span className="tc text-[9px] text-acid/60 mr-2">{String(i + 1).padStart(2, '0')}</span>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
