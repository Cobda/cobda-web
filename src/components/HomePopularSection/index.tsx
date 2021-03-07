import React from 'react'
import PopularItemCarousel from '../PopularItemCarousel'
import useTranslation from 'next-translate/useTranslation'

const HomePopularSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section home-section--light">
      <header className="home-section__header">
        <h2 className="home-section__title">{t('popularSectionTitle')}</h2>
      </header>
      <PopularItemCarousel />
    </section>
  )
}

export default HomePopularSection
