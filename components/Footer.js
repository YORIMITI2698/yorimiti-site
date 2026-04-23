'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-dark-highlight py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo */}
          <div>
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image
                src="/yorimiti-logo.png"
                alt="YORIMITI Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-2xl font-light text-white" style={{ fontFamily: 'Georgia, serif' }}>YORIMITI</span>
            </Link>
          </div>

          {/* Center - Navigation */}
          <div>
            <h3 className="text-xs font-light text-text-tertiary mb-4 tracking-widest">
              NAVIGATION
            </h3>
            <div className="space-y-3">
              {[
                { name: 'HOME', href: '/' },
                { name: 'ABOUT', href: '/about' },
                { name: 'SERVICES', href: '/services' },
                { name: 'WORKS', href: '/works' },
                { name: 'CONTACT', href: '/contact' }
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-light text-text-secondary hover:text-white transition-colors tracking-widest block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h3 className="text-xs font-light text-text-tertiary mb-4 tracking-widest">
              CONTACT
            </h3>
            <p className="text-xs text-text-secondary font-light leading-relaxed">
              Email: <a href="mailto:contact@yorimiti.jp" className="text-white hover:text-text-secondary transition-colors">contact@yorimiti.jp</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-highlight py-8">
          <div className="text-center">
            <p className="text-xs text-text-tertiary font-light tracking-widest">
              &copy; 2026 YORIMITI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
