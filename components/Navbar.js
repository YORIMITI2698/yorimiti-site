'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const items = [
  { name: 'HOME', href: '/', no: '一' },
  { name: 'SERVICES', href: '/services', no: '二' },
  { name: 'WORKS', href: '/works', no: '三' },
  { name: 'CONTACT', href: '/#contact', no: '四' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-ink/90 backdrop-blur-md z-50 border-b border-line">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo (black + chartreuse artwork sits naturally on paper) */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-75 transition-opacity">
            <Image
              src="/yorimiti-logo.png"
              alt="YORIMITI Logo"
              width={36}
              height={36}
              priority
              className="w-9 h-9"
            />
            <span className="font-disp font-light text-sm tracking-[0.3em] text-fog hidden sm:inline">YORIMITI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-light tracking-widest text-fog/80 hover:text-beni transition-colors relative group"
              >
                <span className="text-[10px] text-beni/70 mr-1.5">{item.no}</span>
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px border-b border-dashed border-beni group-hover:w-full transition-all duration-300"></span>
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
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-xs font-light text-fog/80 hover:text-beni transition-colors tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-[10px] text-beni/70 mr-2">{item.no}</span>
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
