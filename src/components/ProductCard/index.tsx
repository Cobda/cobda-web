import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const COMMA_REGEX = new RegExp(/\B(?=(\d{3})+(?!\d))/g)

const ProductCard = (props: any) => {
  const { t } = useTranslation('products')
  const { id, name, price, deliveryOption, productImagePath } = props.product
  const formattedPrice = price.toString().replace(COMMA_REGEX, ',')
  const imagePath = productImagePath || '/images/yeezy-380.jpg'

  const renderDeliveryOption = () => {
    const option = () => {
      if (deliveryOption === 'Postal') {
        return <a className="product-card__postal">{t('productCardPostal')}</a>
      } else if (deliveryOption === 'Meetup') {
        return <a className="product-card__meet-up">{t('productCardMeetUp')}</a>
      } else {
        return (
          <>
            <a className="product-card__postal">{t('productCardPostal')}</a>
            <a className="product-card__meet-up">{t('productCardMeetUp')}</a>
          </>
        )
      }
    }

    return deliveryOption ? <div className="product-card__option">{option()}</div> : <></>
  }

  return (
    <div className="product-card">
      <figure className="product-card__image-container">
        <Link href={{ pathname: `/products/${id}`, query: { name } }}>
          <a className="product-card__link">
            <img className="product-card__image" src={imagePath} alt="product card" />
          </a>
        </Link>
        <figcaption className="product-card__content">
          <h2 className="product-card__title">{name}</h2>
          <h2 className="product-card__price">{formattedPrice}</h2>
          {renderDeliveryOption()}
        </figcaption>
      </figure>
    </div>
  )
}

export default ProductCard
