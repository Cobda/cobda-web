import React from 'react'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <div className="product-card">
      <figure className="product-card__image-container">
        <Link href="/products/sample-product-view">
          <a className="product-card__link">
            <img src="/images/nike-woman-running-shoe.jpg" alt="fnwjenfioewnf" className="product-card__image" />
          </a>
        </Link>
        <figcaption className="product-card__content">
          <h2 className="product-card__title">Streetwear Socks shoes for Men's...</h2>
        </figcaption>
      </figure>
    </div>
  )
}

export default ProductCard
