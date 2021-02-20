import React from 'react'
import Carousel from '../Carousel'
import useTranslation from 'next-translate/useTranslation'

const HomePopularSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section home-section--popular-item">
      <header className="home-section__header">
        <h1 className="home-section__title">{t('popularSectionHeader')}</h1>
      </header>
      <Carousel />
    </section>
  )
}

export default HomePopularSection
