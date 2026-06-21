import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HomeContactLink from '@/components/HomeContactLink'
import HomeNews from '@/components/HomeNews'
import HomeWorks from '@/components/HomeWorks'
import ServicesOverview from '@/components/ServicesOverview'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Seekbar from '@/components/mv/Seekbar'
import NightScene from '@/components/mv/NightScene'
import EndOfRoad from '@/components/mv/EndOfRoad'

export default function Home() {
  return (
    <main className="relative isolate bg-ink dark:bg-[#171a26] min-h-screen">
      <Navbar />
      <Hero />
      <HomeContactLink />
      <HomeNews />
      <HomeWorks />
      <ServicesOverview />
      <Contact />
      <Footer />
      <EndOfRoad />
      <NightScene />
      <Seekbar />
    </main>
  )
}
