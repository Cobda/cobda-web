import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const AboutUsIntroduction = () => {
  const { t } = useTranslation('about-us')
  return (
    <div className="about-us-introduction-section">
      <h2 className="about-us-introduction-section__title-intro">
        {t('aboutUsSectionTitleIntro')}
      </h2>
      <h2 className="about-us-introduction-section__title-description">
        {t('aboutUsSectionTitleDescription')}
      </h2>
      <div className="about-us-introduction-section__decoration-box-long"></div>
      <div className="about-us-introduction-section__image"></div>
      <div className="about-us-introduction-section__decoration-box-short"></div>
      <p className="about-us-introduction-section__description">
        {t('aboutUsSectionDescription')}
      </p>
    </div>
  )
}

export default AboutUsIntroduction
