import React from 'react'
import { useRouter } from 'next/router'

const ProductList = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/product-detail')
  }

  return (
    <section className="product-list">
      <header>
        <h2 className="product-list__title" onClick={handleClick}>
          Product List
        </h2>
        <p className="product-list__description">
          This is a sample description
        </p>
      </header>
    </section>
  )
}

export default ProductList
