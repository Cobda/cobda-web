import React, { useState } from 'react'
import SearchBox from '../SearchBox'
import Dropdown, { Option } from 'react-dropdown'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { filteredProductListState, productCategoryState } from '../../recoil/selectors'
import { sortByFilterState } from '../../recoil/atoms'

const ProductListHeader = () => {
  const categoryList = useRecoilValue(productCategoryState)
  const filteredProductList = useRecoilValue(filteredProductListState)
  const setSortByFilterState = useSetRecoilState(sortByFilterState)
  const [selectedSortByFilter, setSelectedSortByFilter] = useState<string>('')
  const { t } = useTranslation('products')
  const sortByFilterOption: string[] = ['highestPrice', 'lowestPrice'].map((option) => t(option))

  const renderSearchBox = () => (
    <div className="product-search__search">
      <SearchBox placeholder={t('searchPlaceholder')} />
    </div>
  )

  const renderSortDropdown = () => {
    const handleDropdownChange = (setOption: (option: string) => void) => (selectedOption: Option) => {
      setOption(selectedOption.value)
      setSortByFilterState(selectedOption.value[0])
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
            onChange={handleDropdownChange(setSelectedSortByFilter)}
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
