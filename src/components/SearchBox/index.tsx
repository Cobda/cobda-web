import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { filteredProductListState } from '../../recoil/selectors'

interface SearchBox {
  readonly placeholder?: string
}

const SearchBox = ({ placeholder }: SearchBox) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<any>([])
  const [isSuggestionShown, setSuggestionShown] = useState(false)
  const productList = useRecoilValue(filteredProductListState)
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
    const { value } = event.currentTarget
    const newFilteredSuggestions =
      productList && productList.filter((product: any) => product.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
    setFilteredSuggestions(newFilteredSuggestions)
    setSuggestionShown(true)
    setSearchValue(value)
  }

  const handleInputClick = () => {
    if (searchValue) {
      setSuggestionShown(true)
    }
  }

  const handleSearchClick = () => {
    if (searchValue) {
      router.push(`products/`)
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
    const handleListItemClick = (suggestion: any) => () => {
      const { id, name } = suggestion
      router.push({ pathname: `/products/${id}`, query: { name } })
      setFilteredSuggestions([])
      setSuggestionShown(false)
    }

    if (isSuggestionShown && searchValue) {
      const filterResults = filteredSuggestions.map((suggestion: any) => (
        <li key={suggestion.id} className="home-search-suggestion__item" onClick={handleListItemClick(suggestion)}>
          {suggestion.name}
        </li>
      ))

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

  const inputPlaceholder = placeholder || t('searchPlaceholder')

  return (
    <>
      <div className="home-search-box" ref={searchBoxRef}>
        <input
          className="home-search-box__input"
          name="search"
          value={searchValue}
          placeholder={inputPlaceholder}
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

export default SearchBox
