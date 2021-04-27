import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([])
  const [isSuggestionShown, setSuggestionShown] = useState(false)
  const { t } = useTranslation('home')
  const router = useRouter()
  const searchBoxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      const isFocused: boolean | undefined = searchBoxRef.current?.contains(event.target as Node)
      if (!isFocused) {
        setSuggestionShown(false)
      }
    }

    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //TODO: This below data should be obtained from database
    const suggestions: string[] = ['Alabama', 'Alaska', 'American Samoa', 'Bubble Holmes', 'Contra Hits', 'Amazon']
    const { value } = event.currentTarget
    const newFilteredSuggestions = suggestions.filter(
      (suggestion: string) => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
    setFilteredSuggestions(newFilteredSuggestions)
    setSuggestionShown(true)
    setSearchValue(value)
  }

  const handleInputClick = () => {
    if (searchValue) {
      setSuggestionShown(true)
    }
  }

  const handleListItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    router.push(`products/${event.currentTarget.innerText}`)
    setFilteredSuggestions([])
    setSuggestionShown(false)
  }

  const handleSearchClick = () => {
    if (searchValue) {
      router.push(`products/${searchValue}`)
      setSearchValue('')
      setSuggestionShown(false)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchClick()
    }
  }

  const renderSearchSuggestion = () => {
    if (isSuggestionShown && searchValue) {
      const filterResults = filteredSuggestions.map((suggestion) => {
        return (
          <li className="home-search-suggestion__item" key={suggestion} onClick={handleListItemClick}>
            {suggestion}
          </li>
        )
      })

      const hasFilteredSuggestions: boolean = filteredSuggestions.length > 0
      const autoComplete = hasFilteredSuggestions ? (
        <ul className="home-search-suggestion__list">{filterResults}</ul>
      ) : (
        <ul className="home-search-suggestion__list--small">
          <li className="home-search-suggestion__item--grey">Not found</li>
        </ul>
      )

      return <div className="home-search-suggestion">{autoComplete}</div>
    } else {
      return <></>
    }
  }

  return (
    <>
      <div className="home-search-box" ref={searchBoxRef}>
        <input
          className="home-search-box__input"
          name="search"
          value={searchValue}
          placeholder={t('searchPlaceholder')}
          autoComplete="off"
          onClick={handleInputClick}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="home-search-box__button" onClick={handleSearchClick} />
        {renderSearchSuggestion()}
      </div>
    </>
  )
}

export default HomeSearchBox
