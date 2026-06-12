import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HomeContactLink from '@/components/HomeContactLink'
import HomeWorks from '@/components/HomeWorks'
import ServicesOverview from '@/components/ServicesOverview'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'

export default function Home() {
  return (
    <main className="bg-ink min-h-screen">
      <Navbar />
      <Hero />
      <HomeContactLink />
      <HomeWorks />
      <ServicesOverview />
      <Contact />
      <Footer />
      <Seekbar />
    </main>
  )
}
