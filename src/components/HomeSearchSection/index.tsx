import React from 'react'
import { useRouter } from 'next/router'

export default function HomeSearchSection() {
  const router = useRouter()

  const handleSearchClick = () => {
    router.push('/products')
  }

  return (
    <section className="home-section">
      <header className="home-section__header">
        <h2 className="home-section__title">Sample 1</h2>
        <p className="home-section__description">
          This is a sample description
        </p>
      </header>
      <div className="home-search-box">
        <button className="home-search-box__button" onClick={handleSearchClick}>
          <span className="home-search-box__text">Search</span>
        </button>
      </div>
    </section>
  )
}
