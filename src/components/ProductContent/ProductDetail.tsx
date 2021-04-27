import useTranslation from 'next-translate/useTranslation'
import React from 'react'

interface ProductDetail {
  readonly title: string
  readonly price: number
  readonly color: string
  readonly size: string
  readonly deliveryOption: string
}

const exampleProduct: ProductDetail = {
  title: 'Men Running Shoes Black Trainer Sport Sneaker',
  price: 5600,
  color: 'Blue',
  size: '42',
  deliveryOption: 'Postal'
}

const COMMA_REGEX = new RegExp(/\B(?=(\d{3})+(?!\d))/g)

const ProductDetail = () => {
  const { t } = useTranslation('product-view')
  // TODO: Remove this mock
  const { title, price, color, size, deliveryOption } = exampleProduct
  
  const formattedPrice = price.toString().replace(COMMA_REGEX, ',')
  const priceLabel: string = t('price') + formattedPrice + ' ' + t('baht')
  const colorLabel: string = t('color') + color
  const sizeLabel: string = t('size') + size
  const deliveryOptionLabel: string = t('deliveryOption') + deliveryOption
  const labels: string[] = [priceLabel, colorLabel, sizeLabel, deliveryOptionLabel]

  const renderProductLabels = () => labels.map((label) => <h3 className="product-detail__label">{label}</h3>)

  return (
    <div className="product-detail">
      <header className="product-detail__header">
        <h2 className="product-detail__title">{title}</h2>
      </header>
      <div className="product-detail__body">{renderProductLabels()}</div>
      <div className="product-detail__footer">
        <button className="product-detail__button">{t('contactSeller')}</button>
      </div>
    </div>
  )
}

export default ProductDetail
