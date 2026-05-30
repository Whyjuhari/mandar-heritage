import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutSection from '../components/AboutSection'
import CultureObjects from '../components/CultureObjects'
import MappingSection from '../components/MappingSection'
import QREducationSection from '../components/QREducationSection'
import PortfolioEvidence from '../components/PortfolioEvidence'
import DevelopmentPlan from '../components/DevelopmentPlan'
import FeaturedQuote from '../components/FeaturedQuote'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

function LandingPage() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <CultureObjects />
        <MappingSection />
        <QREducationSection />
        <PortfolioEvidence />
        <DevelopmentPlan />
        <FeaturedQuote />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage
