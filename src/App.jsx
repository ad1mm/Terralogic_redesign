import Nav from './sections/Nav.jsx'
import Hero from './sections/Hero.jsx'
import TrustBar from './sections/TrustBar.jsx'
import Capabilities from './sections/Capabilities.jsx'
import Sectors from './sections/Sectors.jsx'
import WhyUs from './sections/WhyUs.jsx'
import Stats from './sections/Stats.jsx'
import Approach from './sections/Approach.jsx'
import Work from './sections/Work.jsx'
import Partners from './sections/Partners.jsx'
import Testimonials from './sections/Testimonials.jsx'
import CTA from './sections/CTA.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#capabilities"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-navy focus:px-5 focus:py-2.5 focus:text-paper-soft"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Capabilities />
        <Sectors />
        <WhyUs />
        <Stats />
        <Approach />
        <Work />
        <Partners />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
