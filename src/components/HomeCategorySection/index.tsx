import React from 'react'
import HomeCategory from '../HomeCategory'

const HomeCategorySection = () => {
  return (
    <section className="home-section home-section--dark">
      <header className="home-section__header">
        <h2 className="home-section__title">CATEGORIES</h2>
      </header>
      <HomeCategory />
    </section>
  )
}

export default HomeCategorySection
