import React from 'react'
import AboutUsIntroduction from '../AboutUsIntroduction'
import AboutUsQuoteSection from '../AboutUsQuoteSection'

const AboutUsSection = () => {
  return (
    <>
      <AboutUsIntroduction />
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
