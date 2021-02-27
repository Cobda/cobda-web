import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchBox = () => {
  const { t } = useTranslation('home')
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (event) => {
    setSearchValue(event.target.value)
    console.log(searchValue)
  }

  const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    router.push('products/${searchValue}')
    setSearchValue('')
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchValue.trim()) {
      handleSearchClick()
    }
  }

  return (
    <div className="home-search-box">
      <input
        value={searchValue}
        type="text"
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        placeholder={t('searchPlaceholder')}
        name="search"
      />
      <button
        disabled={!searchValue}
        onClick={handleSearchClick}
        className="home-search-box__button"
      />
    </div>
  )
}

export default HomeSearchBox
