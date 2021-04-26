import React, { useState } from 'react'
import Image from 'next/image'
import SearchBox from '../SearchBox'
import Dropdown, { Option } from 'react-dropdown'
import useTranslation from 'next-translate/useTranslation'

const ProductSearchSection = () => {
  const { t } = useTranslation('products')
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const sortOption: string[] = ['highestPrice', 'lowestPrice'].map((option) => t(option))

  const renderSortDropdown = () => {
    const handleDropdownChange = (setOption: (option: string) => void) => (selectedOption: Option) => {
      setOption(selectedOption.value)
    }

    const renderFilter = () => (
      <div className="product-section__filter-group">
        <Image src="/icons/filter.svg" height={21} width={24} />
        <label className="product-section__filter-label">{t('filter')}</label>
      </div>
    )

    return (
      <div className="product-section__dropdown-group">
        <label className="product-section__dropdown-label">{t('sortBy')}</label>
        <Dropdown
          className="product-section__dropdown-option"
          options={sortOption}
          value={selectedFilter}
          placeholder="-"
          onChange={handleDropdownChange(setSelectedFilter)}
        />
        {renderFilter()}
      </div>
    )
  }

  return (
    <div className="product-section">
      <div className="product-section__search">
        <SearchBox />
      </div>
      <div className="product-section__dropdown">{renderSortDropdown()}</div>

      <ul className="product-section__breadcrumb">
        <li className="product-section__breadcrumb-item">
          <a className="product-section__link">All categories</a>
        </li>
        <li className="product-section__breadcrumb-item">
          <a className="product-section__link">Category 1</a>
        </li>
        <li className="product-section__breadcrumb-item">
          <a className="product-section__link">Category 2 (560 results)</a>
        </li>
      </ul>
    </div>
  )
}

export default ProductSearchSection
