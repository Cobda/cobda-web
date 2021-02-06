import React from 'react'
import ProductMedia from './ProductMedia'
import ProductDetail from './ProductDetail'
import ProductInformation from './ProductInformation'

const ProductContent = () => {
  return (
    <section className="product-content">
      <div className="product-content__media">
        <ProductMedia />
      </div>
      <div className="product-content__detail">
        <ProductDetail />
      </div>
      <div className="product-content__information">
        <ProductInformation />
      </div>
    </section>
  )
}

export default ProductContent
