import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchBox = () => {
  const { t } = useTranslation('home')
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const handleSearchClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        onChange={handleChange}
        onKeyUp={handleKeyPress}
        placeholder={t('searchPlaceholder')}
        name="search"
        className="home-search-box__input"
      />
      <button onClick={handleSearchClick} className="home-search-box__button" />
    </div>
  )
}

export default HomeSearchBox
