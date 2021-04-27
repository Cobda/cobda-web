import React from 'react'
import NewReleaseBanner from '../NewReleaseBanner'
import NewReleaseItem from '../NewReleaseItem'

const HomeNewReleaseSection = () => {
  return (
    <section className="home-section home-section--light">
      <NewReleaseBanner />
      <NewReleaseItem leftContent={true}/>
      <NewReleaseItem leftContent={false}/>
    </section>
  )
}

export default HomeNewReleaseSection
