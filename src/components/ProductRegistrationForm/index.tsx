import React from 'react'
import Form from './Form'
import useTranslation from 'next-translate/useTranslation'
import { useSession } from 'next-auth/client'

const ProductRegistrationForm = () => {
  const { t } = useTranslation('product-registration')
  const [session]: any = useSession()

  const renderErrorMessage = () =>
    !session ? <div className="product-registration-form__help">{t('signInRequiredText')}</div> : <></>

  return (
    <section className="product-registration-form">
      {renderErrorMessage()}
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
