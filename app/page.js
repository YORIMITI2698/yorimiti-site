import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesOverview from '@/components/ServicesOverview'
import AboutSection from '@/components/AboutSection'
import WorksSection from '@/components/WorksSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ServicesOverview />
      <AboutSection />
      <WorksSection />
      <CTASection />
      <Footer />
    </main>
  )
}
