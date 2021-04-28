import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const AccountProduct = () => {
  const { t } = useTranslation('account')

  return (
    <div className="account-product">
      <figure className="account-product__image-container">
        <img className="account-product__image" 
          src="/images/hipster-model.jpg" 
          alt="Hipster model with long hair" 
        />
        <figcaption className="account-product__caption">
          <h2 className="account-product__title">John Wick</h2>
          <h2 className="account-product__short-name">JW</h2>
          <div className="account-product__option">
            <label className="account-product__label">{t('deliveryOption')}</label>
            <a className="account-product__postal">{t('postal')}</a>
            <a className="account-product__meet-up">{t('meetUp')}</a>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default AccountProduct
