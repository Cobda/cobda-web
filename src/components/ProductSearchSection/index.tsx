import React, { useState } from 'react'
import Image from 'next/image'
import SearchBox from '../SearchBox'
import Dropdown, { Option } from 'react-dropdown'
import useTranslation from 'next-translate/useTranslation'

const ProductSearchSection = () => {
  const { t } = useTranslation('products')
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const sortOption: string[] = ['highestPrice', 'lowestPrice'].map((option) => t(option))

  const renderSearchBox = () => (
    <div className="product-search__search">
      <SearchBox />
    </div>
  )

  const renderSortDropdown = () => {
    const handleDropdownChange = (setOption: (option: string) => void) => (selectedOption: Option) => {
      setOption(selectedOption.value)
    }

    const renderFilter = () => (
      <div className="product-search__filter-group">
        <Image src="/icons/filter.svg" height={21} width={24} />
        <label className="product-search__filter-label">{t('filter')}</label>
      </div>
    )

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
          {renderFilter()}
        </div>
      </div>
    )
  }

  const renderBreadcrumb = () => (
    <ul className="product-search__breadcrumb">
      <li className="product-search__breadcrumb-item">
        <a className="product-search__link">{t('allCategory')}</a>
      </li>
      <li className="product-search__breadcrumb-item">
        <a className="product-search__link">{t('shirtCategory')}</a>
      </li>
      <li className="product-search__breadcrumb-item">
        <a className="product-search__link">{t('shoeCategory')}</a>
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

export default ProductSearchSection
