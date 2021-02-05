import React from 'react'

const ProductList = () => {
  return (
    <section className="product-list">
      <a href="/product-detail">
        <article>
          <h2 className="product-list__title">Product List</h2>
          <p className="product-list__description">
            This is a sample description
          </p>
        </article>
      </a>
    </section>
  )
}

export default ProductList
