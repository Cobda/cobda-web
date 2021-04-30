import React, { useState } from 'react'
import SearchBox from '../SearchBox'
import Dropdown, { Option } from 'react-dropdown'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { filteredProductListState, productCategoryState } from '../../recoil/selectors'

const ProductListHeader = () => {
  const { t } = useTranslation('products')
  const [selectedFilter, setSelectedFilter] = useState<string>('')
  const category = useRecoilValue(productCategoryState)
  const filteredProductList = useRecoilValue(filteredProductListState)
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

  const renderBreadcrumb = () => {
    let productCategory: string = ''
    const resultNumber = filteredProductList && filteredProductList.length
    const resultLabel = `(${resultNumber} ${t('results')})`

    if (category.includes('Footwear') && category.includes('Shirt')) {
      productCategory = t('bothFootwearAndShirt')
    } else if (category.includes('Footwear')) {
      productCategory = t('footwear')
    } else if (category.includes('Shirt')) {
      productCategory = t('shirt')
    }

    const renderProductCategory = () => {
      return productCategory ? (
        <li className="product-search__breadcrumb-item product-search__breadcrumb-item--prepend">
          <a className="product-search__link product-search__link--primary">{productCategory}</a>
        </li>
      ) : (
        <></>
      )
    }

    return (
      <ul className="product-search__breadcrumb">
        <li className="product-search__breadcrumb-item">
          <a className="product-search__link">{t('home')}</a>
        </li>
        {renderProductCategory()}
        <li className="product-search__breadcrumb-item">
          <a className="product-search__link">{resultLabel}</a>
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
