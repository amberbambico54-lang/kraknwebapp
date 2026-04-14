import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutHero from '../components/about/AboutHero'
import AboutStory from '../components/about/AboutStory'
import MissionVision from '../components/about/MissionVision'
import CoreValues from '../components/about/CoreValues'
import TeamSection from '../components/about/TeamSection'
import Differentiation from '../components/about/Differentiation'
import CTA from '../components/CTA'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutStory />
      <MissionVision />
      <CoreValues />
      <TeamSection />
      <Differentiation />
      <CTA />
      <Footer />
    </>
  )
}
