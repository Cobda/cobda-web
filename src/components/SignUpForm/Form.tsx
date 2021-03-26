import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import useTranslation from 'next-translate/useTranslation'

interface FormInput {
  readonly firstName: string
  readonly lastName: string
  readonly email: string
  readonly username: string
  readonly password: string
}

const initialInputValue: FormInput = {
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
}

const Form = () => {
  const [inputValue, setInputValue] = useState<FormInput>(initialInputValue)
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/sign-up-success')
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputValue({
      ...inputValue,
      [name]: value,
    })
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
        inputType="text"
        inputValue={inputValue.username}
        placeholder={t('usernamePlaceholder')}
        errorMessage={t('usernameAlreadyUsed')}
        onChange={handleInputChange}
      />
      <TextField
        name="email"
        label={t('email')}
        inputType="email"
        inputValue={inputValue.email}
        placeholder={t('emailPlaceholder')}
        errorMessage={t('emailIncorrectFormat')}
        onChange={handleInputChange}
      />
      <PasswordField
        name="password"
        label={t('password')}
        inputValue={inputValue.password}
        placeholder={t('passwordPlaceholder')}
        errorMessage={t('passwordRequiredFormat')}
        onChange={handleInputChange}
      />
      <TextField
        name="firstName"
        label={t('firstName')}
        inputType="text"
        inputValue={inputValue.firstName}
        placeholder={t('firstNamePlaceholder')}
        errorMessage={t('inputImproperName')}
        onChange={handleInputChange}
      />
      <TextField
        name="lastName"
        label={t('lastName')}
        inputType="text"
        inputValue={inputValue.lastName}
        placeholder={t('lastNamePlaceholder')}
        errorMessage={t('inputImproperName')}
        onChange={handleInputChange}
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
