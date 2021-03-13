import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import OurGoalBox from '../OurGoalBox'

const AboutUsOurGoalSection = () => {
  const { t } = useTranslation('about-us')

  return (
    <section className="about-us-section">
      <header className="about-us-section__header about-us-section__header--spacious">
        <h1 className="about-us-section__title">{t('goalSectionTitle')}</h1>
      </header>
      <OurGoalBox />
    </section>
  )
}

export default AboutUsOurGoalSection
