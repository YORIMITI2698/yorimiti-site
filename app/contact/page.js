'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Contact Form Section */}
      <section className="pt-20 py-32 px-4 bg-dark-bg">
        <Contact />
      </section>

      <Footer />
    </main>
  )
}
