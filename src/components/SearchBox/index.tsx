import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { filteredProductListState } from '../../recoil/selectors'
import { searchInputValueState } from '../../recoil/atoms'

interface SearchBox {
  readonly placeholder?: string
  readonly disableSuggestion?: boolean
}

const SearchBox = ({ placeholder, disableSuggestion }: SearchBox) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredSuggestions, setFilteredSuggestions] = useState<any>([])
  const [isSuggestionShown, setSuggestionShown] = useState(false)
  const searchInputValue = useRecoilValue(searchInputValueState)
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

    setSearchValue(searchInputValue)
    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [searchInputValue])


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
      router.push({ pathname: `products/`, query: { value: searchValue } })
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

    if (!disableSuggestion && isSuggestionShown && searchValue) {
      const filterResults = filteredSuggestions.map((suggestion: any) => {
        const suggestionImagePath = suggestion.productImagePath && suggestion.productImagePath.split('?')[0]

        return (
          <li key={suggestion.id} className="search-suggestion__item" onClick={handleListItemClick(suggestion)}>
            <div className="search-suggestion__image-wrapper">
              <img className="search-suggestion__image" src={suggestionImagePath} alt="Product Image" />
            </div>
            <div>
              <h4 className="search-suggestion__label">{suggestion.name}</h4>
              <h5 className="search-suggestion__label search-suggestion__label--small">{suggestion.color}</h5>
            </div>
          </li>
        )
      })

      const hasFilteredSuggestions: boolean = filteredSuggestions.length > 0

      return hasFilteredSuggestions ? (
        <ul className="search-suggestion">{filterResults}</ul>
      ) : (
        <ul className="search-suggestion search-suggestion--small">
          <li className="search-suggestion__item search-suggestion__item--small">
            <h5 className="search-suggestion__label search-suggestion__label--small">{t('notFound')}</h5>
          </li>
        </ul>
      )
    } else {
      return <></>
    }
  }

  const inputPlaceholder = placeholder || t('searchPlaceholder')

  return (
    <>
      <div className="search-box" ref={searchBoxRef}>
        <input
          className="search-box__input"
          name="search"
          value={searchValue}
          placeholder={inputPlaceholder}
          autoComplete="off"
          onClick={handleInputClick}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="search-box__button" onClick={handleSearchClick} />
        {renderSearchSuggestion()}
      </div>
    </>
  )
}

export default SearchBox
