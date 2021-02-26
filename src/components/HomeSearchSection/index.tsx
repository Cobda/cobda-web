import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import HomeSearchBox from '../HomeSearchBox/'

const HomeSearchSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section home-section--background-image">
      <div className="home-search">
        <div className="home-search__content">
          <h1 className="home-search__title">{t('searchSectionTitle')}</h1>
          <p className="home-search__description">
            {t('searchSectionDescription')}
          </p>
        </div>
        <div className="home-search__actionable">
          <HomeSearchBox />
        </div>
      </div>
    </section>
  )
}

export default HomeSearchSection
