'use client'

import Link from 'next/link'
import Image from 'next/image'

// v2: the end of today's walk.
export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line py-16 px-4 pb-28">
      <div className="max-w-7xl mx-auto">
        <p className="tc text-[10px] text-beni/80 tracking-[0.5em] text-center mb-12">− 旅のおわり −</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3 hover:opacity-75 transition-opacity">
              <Image
                src="/yorimiti-logo.png"
                alt="YORIMITI Logo"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-disp font-light text-2xl tracking-[0.2em] text-fog">YORIMITI</span>
            </Link>
          </div>

          {/* Center - Navigation */}
          <div>
            <h3 className="tc text-[10px] text-mute mb-4 tracking-[0.3em]">NAVIGATION</h3>
            <div className="space-y-3">
              {[
                { name: 'HOME', href: '/' },
                { name: 'SERVICES', href: '/services' },
                { name: 'WORKS', href: '/works' },
                { name: 'CONTACT', href: '/#contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-light text-fog/70 hover:text-beni transition-colors tracking-widest block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h3 className="tc text-[10px] text-mute mb-4 tracking-[0.3em]">CONTACT</h3>
            <div className="space-y-2">
              <p className="text-xs text-fog/70 font-light leading-relaxed">
                Email: <a href="mailto:contact@yorimiti.jp" className="hover:text-beni transition-colors">contact@yorimiti.jp</a>
              </p>
              <p className="text-xs text-fog/70 font-light leading-relaxed">
                TEL: <a href="tel:080-8431-4877" className="hover:text-beni transition-colors">080-8431-4877</a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-line py-8 flex flex-col items-center gap-3">
          <span className="stamp text-sm">寄</span>
          <p className="tc text-[10px] text-mute text-center tracking-[0.25em]">
            &copy; 2026 YORIMITI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
