import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from "next/router"

const HomeSearchBox = () => {
  const { t } = useTranslation('home')
  const [searchItem, setSearch] = useState('');

  const handleClickSearch = (e) => {
    window.open(`products/${searchItem}`);
    setSearch("")
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClickSearch()
    }
  }

  return (
    <div className="home-search-box">
      <input
        value={searchItem}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={handleKeyPress}
        placeholder="What are you looking for?"
        name="search"
      />
      <button data-key="13" onClick={handleClickSearch} className="home-search-box__button" />
    </div>
  )
}

export default HomeSearchBox
