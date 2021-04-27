import React from 'react'
import Link from 'next/link'
import Form from './Form'
import useTranslation from 'next-translate/useTranslation'

const SignInForm = () => {
  const { t } = useTranslation('sign-in')

  return (
    <section className="sign-in-form">
      <header className="sign-in-form__header">
        <h3 className="sign-in-form__title">{t('welcome')}</h3>
      </header>
      <div className="sign-in-form__body">
        <Form />
      </div>
      <footer className="sign-in-form__footer">
        <div className="sign-in-form__footer-item">
          <p className="sign-in-form__description">{t('doNotHaveAccount')}</p>
          <Link href="/sign-up">
            <a className="sign-in-form__link">{t('createAccount')}</a>
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default SignInForm
