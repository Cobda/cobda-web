import React, { useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const SearchBox = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')
  const [active, setActive] = useState(0)
  const [filtered, setFiltered] = useState<string[]>([])
  const [isShow, setIsShow] = useState(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const suggestions : string[] = ['Alabama','Alaska','American Samoa'];
    const searchValue = event.currentTarget.value
    const newFilteredSuggestions = suggestions.filter(
      (suggestion: string) =>
        suggestion.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    )
    setActive(0)
    setFiltered(newFilteredSuggestions)
    setIsShow(true)
    setSearchValue(event.currentTarget.value)
  }

  const handleListClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(0)
    setFiltered([])
    setIsShow(false)
    setSearchValue(event.currentTarget.innerText)
  }

  const handleSearchClick = () => {
    if (searchValue) {
      router.push('products/${searchValue}')
      setSearchValue('')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setActive(0)
      setIsShow(false)
      setSearchValue(filtered[active])
      handleSearchClick()
    } else if (event.key === 'Up') {
      return active === 0 ? null : setActive(active - 1)
    } else if (event.key === 'Down') {
      return active - 1 === filtered.length ? null : setActive(active + 1)
    }
  }

  const renderAutocomplete = () => {
    if (isShow && searchValue) {
      if (filtered.length) {
        return (
          <ul className="home-search-suggestion__autocomplete">
            {filtered.map((suggestion, index) => {
              let className
              if (index === active) {
                className = 'active'
              }
              return (
                <li className={className} key={suggestion} onClick={handleListClick}>
                  {suggestion}
                </li>
              )
            })}
          </ul>
        )
      } else {
        return (
          <div className="home-search-suggestion__no-autocomplete">
            <em>Not found</em>
          </div>
        )
      }
    }
    return <></>
  }

  return (
    <>
    <div className="home-search-box">
      <input
        type="search"
        value={searchValue}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        onKeyDown={handleKeyPress}
        placeholder={t('searchPlaceholder')}
        name="search"
        className="home-search-box__input"
      />
      <button onClick={handleSearchClick} className="home-search-box__button" />
    </div>
    <div className="home-search-suggestion">
      {renderAutocomplete()}
    </div>
    </>
  )
}

export default SearchBox
