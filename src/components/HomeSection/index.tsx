import React from 'react'
import HomeSearchSection from '../HomeSearchSection'
import HomePopularSection from '../HomePopularSection'
import HomeCategorySection from '../HomeCategorySection'
import HomeNewReleaseSection from '../HomeNewReleaseSection'

const HomeSection = () => {
  return (
    <>
      <HomeSearchSection />
      <HomeCategorySection />
      <HomeNewReleaseSection />
      <HomePopularSection />
    </>
  )
}

export default HomeSection
