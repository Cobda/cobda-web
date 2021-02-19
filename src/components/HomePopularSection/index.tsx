import React from 'react'
import Carousel from '../Carousel'

const HomePopularSection = () => {
  return (
    <section className="home-section home-section--popular-item">
      <header className="home-section__header">
        <h1 className="home-section__title">POPULAR SEARCHES</h1>
      </header>
      <Carousel />
    </section>
  )
}

export default HomePopularSection
