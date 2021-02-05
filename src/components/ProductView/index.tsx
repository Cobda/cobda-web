import React from 'react'
import ProductContent from './product-content'
import ProductDetail from './product-detail'
import ProductInformation from './product-information'

const ProductView = () => {
  return (
    <section className="product-view">
      <div className="product-view__content">
        <ProductContent />
      </div>
      <div className="product-view__detail">
        <ProductDetail />
      </div>
      <div className="product-view__information">
        <ProductInformation />
      </div>
    </section>
  )
}

export default ProductView
