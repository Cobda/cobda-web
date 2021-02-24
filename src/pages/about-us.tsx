import React from 'react'
import AboutUsSection from '../components/AboutUsSection'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

const AboutUs = () => (
  <div className="layout-about-us">
    <Meta title="About Us | Cobda" />
    <header>
      <Navbar />
    </header>
    <main>
      <AboutUsSection />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default AboutUs
