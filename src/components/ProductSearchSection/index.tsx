import React from 'react'
import Link from 'next/link'
import SearchBox from '../SearchBox'
import useTranslation from 'next-translate/useTranslation'

const ProductSearchSection = () => {
  const { t } = useTranslation('products')

  return (
    <div className="product-section">
      <div className="product-section__search">
        <SearchBox />
      </div>
      <div className="product-section__sort-by">sort by </div>

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
