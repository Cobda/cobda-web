import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchSection = () => {
  const router = useRouter()
  const { t } = useTranslation('home')

  const handleSearchClick = () => {
    router.push('/products')
  }

  return (
    <section className="home-section home-section--background-image home-section--search">
      <div className="home-search">
        <h1 className="home-search__title">COBDA, PRESENTED BY BANK.</h1>
        <p className="home-search__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi
          magna, placerat eu semper at, pretium sit amet libero. Integer
          ultrices tristique quam.
        </p>
      </div>
      {/* <div className="home-search-box">
        <button className="home-search-box__button" onClick={handleSearchClick}>
          <span className="home-search-box__text">{t("search")}</span>
        </button>
      </div> */}
    </section>
  )
}

export default HomeSearchSection
