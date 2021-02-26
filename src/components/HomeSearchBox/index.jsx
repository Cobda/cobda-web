import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchBox = () => {
  const { t } = useTranslation('home')

  return (
    <div className="home-search-box">
      <input type="text" placeholder="What are you looking for?" />
      <button className="home-search-box__button" />
    </div>
  )
}

export default HomeSearchBox
