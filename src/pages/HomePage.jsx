import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VideoSection from '../components/VideoSection'
import Benefits from '../components/Benefits'
import Products from '../components/Products'
import BrandStory from '../components/BrandStory'
import Features from '../components/Features'
import SocialProof from '../components/SocialProof'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <Benefits />
      <Products />
      <BrandStory />
      <Features />
      <SocialProof />
      <CTA />
      <Footer />
    </>
  )
}
