import React from 'react'
import HomeSearchSection from '../HomeSearchSection'
import HomePopularSection from '../HomePopularSection'
import HomeCategorySection from '../HomeCategorySection'

const HomeSection = () => {
  return (
    <>
      <HomeSearchSection />
      <HomeCategorySection />
      <section className="home-section home-section--light">
        <header className="home-section__header">
          <h2 className="home-section__title">Sample 3</h2>
          <p className="home-section__description">
            This is a sample description
          </p>
        </header>
      </section>
      <HomePopularSection />
    </>
  )
}

export default HomeSection
