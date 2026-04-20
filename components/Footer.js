'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {[
            { name: 'HOME', href: '#home' },
            { name: 'SERVICES', href: '#services' },
            { name: 'PRICING', href: '#pricing' },
            { name: 'WORKS', href: '#portfolio' },
            { name: 'CONTACT', href: '#contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-text-secondary hover:text-accent-cyan transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="text-center text-text-secondary text-sm">
          <p>&copy; 2026 YORIMITI. All rights reserved.</p>
          <p>Email: contact@yorimiti.jp</p>
        </div>
      </div>
    </footer>
  )
}
