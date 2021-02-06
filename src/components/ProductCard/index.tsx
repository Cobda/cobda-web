import React from 'react'
import Link from 'next/link'

const ProductCard = () => {
  return (
    <div className="product-card">
      <Link href="/product-view">
        <a className="product-card__link">
          <div className="product-card__content">
            <span>
              Click Me!
            </span>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProductCard
