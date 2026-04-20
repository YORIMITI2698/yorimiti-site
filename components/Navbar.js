'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-start h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-purple-blue bg-clip-text text-transparent pt-4">
            🦉 YORIMITI
          </Link>

          {/* Desktop Menu - Right Top */}
          <div className="hidden md:flex gap-8 pt-4">
            {[
              { name: 'HOME', href: '/' },
              { name: 'ABOUT', href: '/about' },
              { name: 'SERVICES', href: '/services' },
              { name: 'PRICE', href: '/pricing' },
              { name: 'GRAPHIC', href: '/graphic' },
              { name: 'WORKS', href: '/works' },
              { name: 'CONTACT', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-accent-cyan transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-purple-blue group-hover:w-full transition-all duration-300"></span>
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
          <div className="md:hidden pb-4 space-y-2">
            {[
              { name: 'HOME', href: '/' },
              { name: 'ABOUT', href: '/about' },
              { name: 'SERVICES', href: '/services' },
              { name: 'PRICE', href: '/pricing' },
              { name: 'GRAPHIC', href: '/graphic' },
              { name: 'WORKS', href: '/works' },
              { name: 'CONTACT', href: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-text-secondary hover:text-accent-cyan transition-colors"
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
