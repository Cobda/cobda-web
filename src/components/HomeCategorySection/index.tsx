import React from 'react'
import HomeCategory from '../HomeCategory'
import useTranslation from 'next-translate/useTranslation'

const HomeCategorySection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section">
      <header className="home-section__header">
        <h2 className="home-section__title">{t('categorySectionTitle')}</h2>
      </header>
      <HomeCategory />
    </section>
  )
}

export default HomeCategorySection
