import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchBox = () => {
  const { t } = useTranslation('home')

  return (
    <div className="home-search-box">
      <input type="text" placeholder="Search" className="home-search-box" />
      <button className="home-search-box">Search</button>
    </div>
  )
}

export default HomeSearchBox
