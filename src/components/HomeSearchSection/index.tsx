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
    <section className="home-search-section">
      <div className="home-search-section__decorate"></div>
        <div className="home-search-section__image"></div>
        <h2 className="home-search-section__title">Cobda, streetwear community</h2>
        <p className="home-search-section__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero
        erat, porttitor mattis turpis eu, fermentum porttitor elit. Integer
        auctor orci at ligula cursus pellentesque.
        </p>
      <div className="home-search-section__searchbox">
        <button className="home-search-section__searchbox--button" onClick={handleSearchClick}>
          <span className="home-search-section__searchbox--text">Search</span>
        </button>
      </div>
    </section>
  )
}

export default HomeSearchSection
