import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const HomeSearchBox = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [active, setActive] = useState(0)
  const [filteredSuggestion, setFilteredSuggestion] = useState<string[]>([])
  const [isSuggestionShown, setSuggestionShown] = useState(false)
  const { t } = useTranslation('home')
  const router = useRouter()

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      setSuggestionShown(false)
    }

    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //TODO: This below data should be obtained from database
    const suggestions: string[] = ['Alabama', 'Alaska', 'American Samoa', 'Bubble Holmes', 'Contra Hits', 'Amazon']

    const {
      currentTarget: { value }
    } = event
    const newFilteredSuggestionSuggestions = suggestions.filter(
      (suggestion: string) => suggestion.toLowerCase().indexOf(value.toLowerCase()) > -1
    )

    setActive(0)
    setFilteredSuggestion(newFilteredSuggestionSuggestions)
    setSuggestionShown(true)
    setSearchValue(value)
  }

  const handleListItemClick = (event: React.MouseEvent<HTMLLIElement>) => {
    setActive(0)
    setFilteredSuggestion([])
    setSuggestionShown(false)
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
    if (searchValue && event.key === 'Enter') {
      setActive(0)
      setSuggestionShown(false)
      setSearchValue(filteredSuggestion[active])
      handleSearchClick()
    }
  }

  const renderSearchSuggestion = () => {
    if (isSuggestionShown && searchValue) {
      const filterResults = filteredSuggestion.map((suggestion, index) => {
        let className = index === active ? 'active' : ''

        return (
          <li className={className} key={suggestion} onClick={handleListItemClick}>
            {suggestion}
          </li>
        )
      })

      const hasFilteredSuggestionSuggestion: boolean = filteredSuggestion.length > 0
      const autoComplete = hasFilteredSuggestionSuggestion ? (
        <ul className="home-search-suggestion__autocomplete">{filterResults}</ul>
      ) : (
        <div className="home-search-suggestion__not-found">
          <em>Not found</em>
        </div>
      )

      return <div className="home-search-suggestion">{autoComplete}</div>
    } else {
      return <></>
    }
  }

  return (
    <>
      <div className="home-search-box">
        <input
          className="home-search-box__input"
          name="search"
          value={searchValue}
          placeholder={t('searchPlaceholder')}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearchClick} className="home-search-box__button" />
        {renderSearchSuggestion()}
      </div>
    </>
  )
}

export default HomeSearchBox
