import React from 'react'
import ProductCard from '../ProductCard'

const ProductList = () => {
  const articles = new Array(20).fill(<ProductCard />)

  return (
    <section className="product-list">
      {articles}
    </section>
  )
}

export default ProductList
