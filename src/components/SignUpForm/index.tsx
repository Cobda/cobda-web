import React from 'react'
import Link from 'next/link'
import Form from './Form'
import useTranslation from 'next-translate/useTranslation'

const SignUpForm = () => {
  const { t } = useTranslation('sign-up')

  const renderHeader = () => (
    <header className="sign-up-form__header">
      <h3 className="sign-up-form__title">{t('register')}</h3>
      <h4 className="sign-up-form__subtitle">{t('personalDetails')}</h4>
    </header>
  )

  const renderBody = () => (
    <div className="sign-up-form__body">
      <Form />
    </div>
  )

  const renderFooter = () => (
    <footer className="sign-up-form__footer">
      <div className="sign-up-form__footer-item">
        <p className="sign-up-form__description">{t('alreadyHaveAccount')}</p>
        <Link href="/sign-in">
          <a className="sign-up-form__link">{t('signIn')}</a>
        </Link>
      </div>
    </footer>
  )

  return (
    <section className="sign-up-form">
      {renderHeader()}
      {renderBody()}
      {renderFooter()}
    </section>
  )
}

export default SignUpForm
