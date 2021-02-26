import React from 'react'
import HomeSearchSection from '../HomeSearchSection'
import HomePopularSection from '../HomePopularSection'
import HomeCategorySection from '../HomeCategorySection'
import HomeNewRealeaseSection from '../HomeNewReleaseSection'

const HomeSection = () => {
  return (
    <>
      <HomeSearchSection />
      <HomeCategorySection />
      <HomeNewRealeaseSection />
      <HomePopularSection />
    </>
  )
}

export default HomeSection
