import React from 'react'
import HomeSearchSection from '../HomeSearchSection'
import HomePopularSection from '../HomePopularSection'

const HomeSection = () => {
  return (
    <>
      <HomeSearchSection />
      <section className="home-section home-section--dark">
        <header className="home-section__header">
          <h2 className="home-section__title">Sample 2</h2>
          <p className="home-section__description">
            This is a sample description
          </p>
        </header>
      </section>
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
