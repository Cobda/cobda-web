import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section home-section--background-image">
      <div className="home-search home-search--background">
        <div className="home-search__content">
          <h1 className="home-search__title">{t('searchSectionTitle')}</h1>
          <p className="home-search__description">{t('searchSectionDescription')}</p>
        </div>
      </div>
      {/* TODO: Add search box */}
    </section>
  )
}

export default HomeSearchSection
