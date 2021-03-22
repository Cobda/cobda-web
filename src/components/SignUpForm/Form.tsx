import React from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../TextField'
import PasswordField from '../TextField/passwordField'
import useTranslation from 'next-translate/useTranslation'

const Form = () => {
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/sign-up-success')
  }

  return (
    <form className="form">
      <header className="form__header">
        <h2 className="form__title">Sign up</h2>
      </header>
      <ProfileUpload />
      <TextField
        name="username"
        label={t('usernameLabel')}
        placeholder={t('usernamePlaceholder')}
        inputType="text"
        errorInput={t('usernameErrorMessage')}
      />
      <TextField
        name="email"
        label={t('emailLabel')}
        placeholder={t('emailPlaceholder')}
        inputType="email"
        errorInput={t('emailErrorMessage')}
      />
      <PasswordField
        name="password"
        label={t('passwordLabel')}
        placeholder={t('passwordPlaceholder')}
        errorInput={t('passwordErrorMessage')}
      />
      <TextField
        name="firstName"
        label={t('firstNameLabel')}
        placeholder={t('firstNamePlaceholder')}
        inputType="text"
        errorInput={t('nameErrorMessage')}
      />
      <TextField
        name="lastName"
        label={t('lastNameLabel')}
        placeholder={t('lastNamePlaceholder')}
        inputType="text"
        errorInput={t('nameErrorMessage')}
      />
      <div className="form__recaptcha">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!}
        />
      </div>
      <div className="form__actionable">
        <button className="form__button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
