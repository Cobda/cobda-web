import React from 'react'
import PopularItemCarousel from '../PopularItemCarousel'
import useTranslation from 'next-translate/useTranslation'

const HomePopularSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section home-section--popular-item">
      <header className="home-section__header">
        <h1 className="home-section__title">{t('popularSectionTitle')}</h1>
      </header>
      <PopularItemCarousel />
    </section>
  )
}

export default HomePopularSection
