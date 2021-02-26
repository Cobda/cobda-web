import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const HomeNewReleaseSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section home-section--light">
      <div className="home-release">
        <h2 className="home-release__title">{t('releaseSectionTitle')}</h2>
        <p className="home-release__description">{t('releaseSectionDescription')}</p>
      </div>
    </section>
  )
}

export default HomeNewReleaseSection
