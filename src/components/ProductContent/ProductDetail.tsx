import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { productState } from '../../recoil/atoms/product'
interface ProductDetail {
  readonly name: string
  readonly price: number
  readonly color: string
  readonly size: string
  readonly deliveryOption: string
}

const COMMA_REGEX = new RegExp(/\B(?=(\d{3})+(?!\d))/g)

const ProductDetail = () => {
  const { t } = useTranslation('product-view')
  const product: any = useRecoilValue(productState)
  const { name, price, color, size, deliveryOption } = product

  const formattedPrice = price ? price.toString().replace(COMMA_REGEX, ',') : price
  const priceLabel: string = formattedPrice + ' ' + t('baht')
  const colorLabel: string = t('color') + color
  const sizeLabel: string = t('size') + size
  const deliveryOptionLabel: string = t('deliveryOption') + deliveryOption
  const labels: string[] = [colorLabel, sizeLabel, deliveryOptionLabel]

  const renderProductLabels = () => labels.map((label) => <h3 className="product-detail__label">{label}</h3>)

  return (
    <div className="product-detail">
      <header className="product-detail__header">
        <h2 className="product-detail__title">{name}</h2>
      </header>
      <div className="product-detail__body">
        <div className="product-detail__label-container">
          <h3 className="product-detail__label">{priceLabel}</h3>
        </div>
        {renderProductLabels()}
      </div>
      <div className="product-detail__footer">
        <button className="product-detail__button">{t('contactSeller')}</button>
      </div>
    </div>
  )
}

export default ProductDetail
