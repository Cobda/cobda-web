import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const ProductList = () => {
  const { t } = useTranslation('products')

  return (
    <section className="product-view-more">
      <input className="product-view-more__button" type="submit" value={t('viewMore')} />
    </section>
  )
}

export default ProductList
