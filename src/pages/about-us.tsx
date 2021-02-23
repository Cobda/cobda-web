import React from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import AboutUsIntroduction from '../components/AboutUsIntroduction'

const AboutUs = () => (
  <div className="layout-about-us">
    <Meta title="About Us | Cobda" />
    <header>
      <Navbar />
    </header>
    <main>
      <AboutUsIntroduction />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default AboutUs
