import React from 'react'
import Link from 'next/link'
import Form from './Form'
import useTranslation from 'next-translate/useTranslation'

const ProductRegistrationForm = () => {
  const { t } = useTranslation('product-registration')

  return (
    <section className="product-registration-form">
      <header className="product-registration-form__header">
        <h3 className="product-registration-form__title">{t('register')}</h3>
      </header>
      <div className="product-registration-form__body">
        <Form />
      </div>
    </section>
  )
}

export default ProductRegistrationForm
