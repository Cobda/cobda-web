import React from 'react'
import AboutUsQuoteSection from '../AboutUsQuoteSection'

const AboutUsSection = () => {
  return (
    <>
      <section className="about-us-section about-us-section--light">
        <header className="about-us-section__header">
          <h2 className="about-us-section__title">Introduction</h2>
        </header>
      </section>
      <section className="about-us-section about-us-section--light">
        <header className="about-us-section__header">
          <h2 className="about-us-section__title">Our Goal</h2>
        </header>
      </section>
      <AboutUsQuoteSection />
    </>
  )
}

export default AboutUsSection
