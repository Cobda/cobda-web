import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchSection = () => {
  const { t } = useTranslation('home')

  return (
    <section className="home-section home-section--background-image">
      <div className="home-search home-search--background">
        <div className="home-search__content">
          <h1 className="home-search__title">COBDA, PRESENTED BY BANK.</h1>
          <p className="home-search__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi
            magna, placerat eu semper at, pretium sit amet libero. Integer
            ultrices tristique quam.
          </p>
        </div>
      </div>
      {/* TODO: Add search box */}
    </section>
  )
}

export default HomeSearchSection
