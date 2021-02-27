import React from 'react'
import NewReleaseBanner from '../NewReleaseBanner'
import NewRelease from '../NewRelease'

const HomeNewReleaseSection = () => {
  return (
    <section className="home-section home-section--light">
      <NewReleaseBanner />
      <NewRelease leftContent={true} />
      <NewRelease />
    </section>
  )
}

export default HomeNewReleaseSection
