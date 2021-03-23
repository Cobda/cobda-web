import React from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
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
        label={t('username')}
        placeholder={t('usernamePlaceholder')}
        inputType="text"
        errorMessage={t('usernameAlreadyUsed')}
      />
      <TextField
        name="email"
        label={t('email')}
        placeholder={t('emailPlaceholder')}
        inputType="email"
        errorMessage={t('emailIncorrectFormat')}
      />
      <PasswordField
        name="password"
        label={t('password')}
        placeholder={t('passwordPlaceholder')}
        errorMessage={t('passwordDefaultRequired')}
      />
      <TextField
        name="firstName"
        label={t('firstName')}
        placeholder={t('firstNamePlaceholder')}
        inputType="text"
        errorMessage={t('inputImproperName')}
      />
      <TextField
        name="lastName"
        label={t('lastName')}
        placeholder={t('lastNamePlaceholder')}
        inputType="text"
        errorMessage={t('inputImproperName')}
      />
      <div className="form__recaptcha">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!} />
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
