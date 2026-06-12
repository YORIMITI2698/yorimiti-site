'use client'

import Link from 'next/link'
import Image from 'next/image'

// End-credits style footer — the MV rolls its staff credit.
export default function Footer() {
  return (
    <footer className="bg-ink border-t border-line py-16 px-4 pb-24">
      <div className="max-w-7xl mx-auto">
        <p className="tc text-[10px] text-acid/70 tracking-[0.4em] text-center mb-12">— END CREDITS —</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="bg-white rounded-md p-1 inline-flex">
                <Image
                  src="/yorimiti-logo.png"
                  alt="YORIMITI Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </span>
              <span className="font-disp font-bold text-2xl tracking-wider text-fog">YORIMITI</span>
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
                  className="text-xs font-light text-fog/70 hover:text-acid transition-colors tracking-widest block"
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
                Email: <a href="mailto:contact@yorimiti.jp" className="hover:text-acid transition-colors">contact@yorimiti.jp</a>
              </p>
              <p className="text-xs text-fog/70 font-light leading-relaxed">
                TEL: <a href="tel:080-8431-4877" className="hover:text-acid transition-colors">080-8431-4877</a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-line py-8">
          <p className="tc text-[10px] text-mute text-center tracking-[0.25em]">
            &copy; 2026 YORIMITI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
