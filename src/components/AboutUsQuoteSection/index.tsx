import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import QuoteBoxCarousel from '../QuoteBoxCarousel'

const AboutUsQuoteSection = () => {
  const { t } = useTranslation('about-us')

  return (
    <section className="about-us-section">
      <header className="about-us-section__header about-us-section__header--quote">
        <h1 className="about-us-section__title">{t('quoteSectionHeader')}</h1>
      </header>
      <QuoteBoxCarousel />
    </section>
  )
}

export default AboutUsQuoteSection
