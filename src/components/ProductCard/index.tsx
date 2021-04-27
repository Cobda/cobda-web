import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const ProductCard = () => {
  const { t } = useTranslation('products')

  return (
    <div className="product-card">
      <figure className="product-card__image-container">
        <Link href="/products/sample-product-view">
          <a className="product-card__link">
            <img src="/images/yeezy-380.jpg" alt="product card" className="product-card__image" />
          </a>
        </Link>
        <figcaption className="product-card__content">
          <h2 className="product-card__title">{t('productCardTitle')}</h2>
          <h2 className="product-card__price">$69.00</h2>
          <div className="product-card__option">
            <a className="product-card__postal">{t('productCardPostal')}</a>
            <a className="product-card__meet-up">{t('productCardMeetUp')}</a>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default ProductCard
