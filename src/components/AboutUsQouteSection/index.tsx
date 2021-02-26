import React from 'react'
import QouteBoxCarousel from '../QuoteBoxCarousel'

const AboutUsQuoteSection = () => {
  return (
    <section className="about-us-section about-us-section--quote">
      <header className="about-us-section__header">
        <h1 className="about-us-section__title">QUOTES</h1>
      </header>
      <QouteBoxCarousel />
    </section>
  )
}

export default AboutUsQuoteSection
