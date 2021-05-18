import React, { useEffect, useState } from 'react'
import SearchBox from '../SearchBox'
import Dropdown, { Option } from 'react-dropdown'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredProductListState, productCategoryState } from '../../recoil/selectors'
import { searchInputValueState, sortByFilterState } from '../../recoil/atoms'
import { useRouter } from 'next/router'

const ProductListHeader = () => {
  const [selectedSortByFilter, setSelectedSortByFilter] = useState<string>('')
  const categoryList = useRecoilValue(productCategoryState)
  const filteredProductList = useRecoilValue(filteredProductListState)
  const setSortByFilterState = useSetRecoilState(sortByFilterState)
  const setSearchInputValue = useSetRecoilState(searchInputValueState)
  const router = useRouter()
  const { t } = useTranslation('products')
  const sortByFilterOption: Option[] = [
    { value: 'highest', label: t('highestPrice') },
    { value: 'lowest', label: t('lowestPrice') }
  ]

  useEffect(() => {
    if (router.query.value) {
      setSearchInputValue(router.query.value as string)
    }
  }, [])

  const renderSearchBox = () => (
    <div className="product-search__search">
      <SearchBox disableSuggestion placeholder={t('searchPlaceholder')} />
    </div>
  )

  const renderSortDropdown = () => {
    const handleDropdownChange = (selectedOption: Option) => {
      setSelectedSortByFilter(selectedOption.value)
      setSortByFilterState(selectedOption.value)
    }

    return (
      <div className="product-search__dropdown">
        <div className="product-search__dropdown-group">
          <label className="product-search__dropdown-label">{t('sortBy')}</label>
          <Dropdown
            className="product-search__dropdown-option"
            options={sortByFilterOption}
            value={selectedSortByFilter}
            placeholder="-"
            onChange={handleDropdownChange}
          />
        </div>
      </div>
    )
  }

  const renderBreadcrumb = () => {
    const productCategory = () => {
      if (categoryList.includes('Footwear') && categoryList.includes('Shirt')) {
        return t('bothFootwearAndShirt')
      } else if (categoryList.includes('Footwear')) {
        return t('footwear')
      } else if (categoryList.includes('Shirt')) {
        return t('shirt')
      }
    }

    const category: string | undefined = productCategory()
    const resultNumber = filteredProductList && filteredProductList.length
    const resultLabel = `(${resultNumber} ${t('results')})`

    const renderProductCategory = () => {
      return category ? (
        <li className="product-search__breadcrumb-item product-search__breadcrumb-item--prepend">
          <p className="product-search__label product-search__label--primary">{category}</p>
        </li>
      ) : (
        <></>
      )
    }

    return (
      <ul className="product-search__breadcrumb">
        <li className="product-search__breadcrumb-item">
          <Link href={'/'}>
            <a className="product-search__link">{t('home')}</a>
          </Link>
        </li>
        {renderProductCategory()}
        <li className="product-search__breadcrumb-item">
          <p className="product-search__label">{resultLabel}</p>
        </li>
      </ul>
    )
  }

  return (
    <section className="product-search">
      {renderSearchBox()}
      {renderSortDropdown()}
      {renderBreadcrumb()}
    </section>
  )
}

export default ProductListHeader
