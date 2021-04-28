import React, { useState } from 'react'
import SearchBox from '../SearchBox'
import Dropdown, { Option } from 'react-dropdown'
import useTranslation from 'next-translate/useTranslation'

const ProductListHeader = () => {
  const { t } = useTranslation('products')
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const sortOption: string[] = ['highestPrice', 'lowestPrice'].map((option) => t(option))

  const renderSearchBox = () => (
    <div className="product-search__search">
      <SearchBox placeholder={t('searchPlaceholder')} />
    </div>
  )

  const renderSortDropdown = () => {
    const handleDropdownChange = (setOption: (option: string) => void) => (selectedOption: Option) => {
      setOption(selectedOption.value)
    }

    return (
      <div className="product-search__dropdown">
        <div className="product-search__dropdown-group">
          <label className="product-search__dropdown-label">{t('sortBy')}</label>
          <Dropdown
            className="product-search__dropdown-option"
            options={sortOption}
            value={selectedFilter}
            placeholder="-"
            onChange={handleDropdownChange(setSelectedFilter)}
          />
        </div>
      </div>
    )
  }

  const renderBreadcrumb = () => (
    <ul className="product-search__breadcrumb">
      <li className="product-search__breadcrumb-item">
        <a className="product-search__link">{t('home')}</a>
      </li>
      <li className="product-search__breadcrumb-item">
        <a className="product-search__link">{t('searchResult')}</a>
      </li>
      <li className="product-search__breadcrumb-item">
        <a className="product-search__link">{t('shoe')}</a>
      </li>
    </ul>
  )

  return (
    <section className="product-search">
      {renderSearchBox()}
      {renderSortDropdown()}
      {renderBreadcrumb()}
    </section>
  )
}

export default ProductListHeader
