import React from 'react'
import ProductCard from '../ProductCard'
import useTranslation from 'next-translate/useTranslation'

const ProductList = () => {
  const { t } = useTranslation('products')
  const articles = new Array(8).fill(<ProductCard />)

  return (
    <section className="product-list">
      {articles}
      <div className="product-list__actionable">
        <input className="product-list__button" type="submit" value={t('viewMore')} />
      </div>
    </section>
  )
}

export default ProductList
