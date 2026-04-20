import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Statement from '@/components/Statement'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Statement />
      <Services />
      <Footer />
    </main>
  )
}
