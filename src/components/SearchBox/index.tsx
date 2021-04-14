import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const SearchBox = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')
  const [active, setActive] = useState(0)
  const [filtered, setFiltered] = useState<string[]>([])
  const [isShown, setIsShown] = useState(false)
  const node = React.createRef<HTMLDivElement>()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //TODO: This below data should be obtained from database
    const suggestions: string[] = [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Bubble Holmes',
      'Contra Hits',
      'Amazon',
    ]
    const {
      currentTarget: { value },
    } = event
    const newFilteredSuggestions = suggestions.filter(
      (suggestion: string) =>
        suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    )

    setActive(0)
    setFiltered(newFilteredSuggestions)
    setIsShown(true)
    setSearchValue(value)
  }

  const handleListClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(0)
    setFiltered([])
    setIsShown(false)
    setSearchValue(event.currentTarget.innerText)
    handleSearchClick()
  }

  const handleSearchClick = () => {
    if (searchValue) {
      router.push(`products/${searchValue}`)
      setSearchValue('')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setActive(0)
      setIsShown(false)
      setSearchValue(filtered[active])
      handleSearchClick()
    }
  }

  const renderAutocomplete = () => {
    if (!isShown) {
      return <></>
    }

    const filterResults = filtered.map((suggestion, index) => {
      let className = index === active ? 'active' : ''

      return (
        <li className={className} key={suggestion} onClick={handleListClick}>
          {suggestion}
        </li>
      )
    })

    return filtered.length ? (
      <ul className="home-search-suggestion__autocomplete">{filterResults}</ul>
    ) : (
      <div className="home-search-suggestion__not-found">
        <em>Not found</em>
      </div>
    )
  }

  return (
    <>
      <div className="home-search-box">
        <input
          type="search"
          value={searchValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={t('searchPlaceholder')}
          name="search"
          className="home-search-box__input"
        />
        <button
          onClick={handleSearchClick}
          className="home-search-box__button"
        />
      </div>
      <div className="home-search-suggestion" ref={node}>
        {renderAutocomplete()}
      </div>
    </>
  )
}

export default SearchBox
