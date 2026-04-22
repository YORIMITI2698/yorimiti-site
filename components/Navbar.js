'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur-md z-50 border-b border-dark-highlight">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/yorimiti-logo.png"
              alt="YORIMITI Logo"
              width={40}
              height={40}
              priority
              className="w-10 h-10"
            />
            <span className="text-sm font-light text-white hidden sm:inline">YORIMITI</span>
          </Link>

          {/* Desktop Menu - Right Top */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { name: 'HOME', href: '/' },
              { name: 'ABOUT', href: '/about' },
              { name: 'SERVICES', href: '/services' },
              { name: 'GRAPHIC', href: '/graphic' },
              { name: 'WORKS', href: '/works' },
              { name: 'CONTACT', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-light tracking-widest text-text-secondary hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-dark-highlight">
            {[
              { name: 'HOME', href: '/' },
              { name: 'ABOUT', href: '/about' },
              { name: 'SERVICES', href: '/services' },
              { name: 'GRAPHIC', href: '/graphic' },
              { name: 'WORKS', href: '/works' },
              { name: 'CONTACT', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-xs font-light text-text-secondary hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
