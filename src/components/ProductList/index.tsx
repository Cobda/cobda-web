import React from 'react'
import Link from 'next/link'

const ProductList = () => {
  return (
    <section className="product-list">
      <header>
        <h2 className="product-list__title">
          <Link href="/product-detail">
            <a className="product-list__link-to-detail">Product List</a>
          </Link>
        </h2>
        <p className="product-list__description">
          This is a sample description
        </p>
      </header>
    </section>
  )
}

export default ProductList
