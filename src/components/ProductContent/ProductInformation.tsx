import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const ProductInformation = () => {
  const { t } = useTranslation('product-view')

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
        <h3 className="product-information__subtitle">
          Men Running Shoes Black Trainer Sport Sneaker
        </h3>
      </div>
      <p className="product-information__description">
        Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh
        mollis. Nulla porta risus id neque tempor, in efficitur justo imperdiet.
        Etiam a ex at ante tincidunt imperdiet. Nunc congue ex vel nisl viverra,
        sit amet aliquet lectus ullamcorper. Praesent luctus lacus non lorem
        elementum, eu tristique sapien suscipit. Sed bibendum, ipsum nec viverra
        malesuada, erat nisi sodales purus, eget hendrerit dui ligula eu enim.
        Ut non est nisi. Pellentesque tristique pretium dolor eu commodo. Proin
        iaculis nibh vitae lectus mollis bibendum. Quisque varius eget urna sit
        amet luctus. Suspendisse potenti. Curabitur ac placerat est, sit amet
        sodales risus. Pellentesque viverra dui auctor, ullamcorper turpis
        pharetra, facilisis quam.
      </p>
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
