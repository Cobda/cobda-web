import React from 'react'
import NewReleaseBanner from '../NewReleaseBanner'
import NewReleaseItem from '../NewReleaseItem'

const HomeNewReleaseSection = () => {
  return (
    <section className="home-section">
      <NewReleaseBanner />
      {/* <NewReleaseItem leftContent={true}/>
      <NewReleaseItem leftContent={false}/> */}
    </section>
  )
}

export default HomeNewReleaseSection
