import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { productState } from '../../recoil/atoms'

const ProductInformation = () => {
  const { t } = useTranslation('product-view')
  const product: any = useRecoilValue(productState)
  const { name, description } = product

  const renderHeaderSection = () => (
    <header className="product-information__header">
      <img
        className="product-information__icon"
        src="/images/product-details-prepend.png"
        alt="Product Details Prepended Icon"
      />
      <h2 className="product-information__title">{t('productDetail')}</h2>
    </header>
  )

  const renderBodySection = () => (
    <div className="product-information__body">
      <div className="product-information__subheader">
        {/* TODO: Remove these mocking contents and fetch data instead */}
        <h3 className="product-information__subtitle">{name}</h3>
      </div>
      <p className="product-information__description">{description}</p>
    </div>
  )

  return (
    <div className="product-information">
      {renderHeaderSection()}
      {renderBodySection()}
    </div>
  )
}

export default ProductInformation
