import React from 'react'
import ProductCard from '../ProductCard'
import useTranslation from 'next-translate/useTranslation'

const ProductListBody = () => {
  const { t } = useTranslation('products')
  const articles = new Array(20).fill(<ProductCard />)

  return (
    <section className="product-list">
      {articles}
    </section>
  )
}

export default ProductListBody
