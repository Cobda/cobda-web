import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const AboutUsGoalSection = () => {
  const { t } = useTranslation('about-us')

  return (
    <section className="about-us-section">
      <header className="about-us-section__header about-us-section__header--goal">
        <h1 className="about-us-section__title">{t('goalSectionTitle')}</h1>
      </header>
      <div className="our-goal-box">
        <h1 className="our-goal-box__title">{t('goalSectionTitle')}</h1>
        <p className="our-goal-box__description">{t('goalSectionDescription')}</p>
      </div>
    </section>
  )
}

export default AboutUsGoalSection
