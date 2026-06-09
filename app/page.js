import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Values from '@/components/Values'
import History from '@/components/History'
import ServicesOverview from '@/components/ServicesOverview'
import WorksSection from '@/components/WorksSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#333333] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Values />
      <History />
      <ServicesOverview />
      <WorksSection />
      <Footer />
    </main>
  )
}
