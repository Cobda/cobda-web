import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const SearchBox = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSearchClick = () => {
    if (searchValue) {
      router.push('products/${searchValue}')
      setSearchValue('')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick()
    }
  }

  return (
    <div className="home-search-box">
      <input
        value={searchValue}
        type="search"
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        placeholder={t('searchPlaceholder')}
        name="search"
        className="home-search-box__input"
      />
      <button onClick={handleSearchClick} className="home-search-box__button" />
    </div>
  )
}

export default SearchBox
