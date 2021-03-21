import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import useTranslation from 'next-translate/useTranslation'
import ProfileUpload from '../ProfileUpload'
import { useForm } from 'react-hook-form'

interface FormInput {
  readonly email: string
  readonly firstName: string
  readonly lastName: string
  readonly username: string
  readonly password: string
}

const initialInputValue = {
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  password: '',
}

const Form = () => {
  const [inputValue, setInputValue] = useState<FormInput>(initialInputValue)
  const [isRecaptchaVerified, setRecaptchaVerified] = useState<boolean>(false)
  const router = useRouter()
  const { t } = useTranslation('sign-up')
  const { register, handleSubmit, errors } = useForm()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  const handleRecaptchaChange = () => {
    setRecaptchaVerified(true)
  }

  const handleFormSubmit = (value: FormInput) => {
    console.log('Value: ', inputValue)
    // router.push('/sign-up-success')
  }

  const renderProfileUpload = () => (
    <div className="form__profile">
      <ProfileUpload />
    </div>
  )

  const renderUpperInput = () => (
    <div className="form__input-stack form__input-stack--upper">
      <div className="form__input-group">
        <label className="form__input-label">{t('firstName')}</label>
        <input
          name="firstName"
          type="text"
          className="form__input"
          value={inputValue.firstName}
          onChange={handleInputChange}
          ref={register({ required: true })}
        />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('lastName')}</label>
        <input
          name="lastName"
          type="text"
          className="form__input"
          value={inputValue.lastName}
          onChange={handleInputChange}
          ref={register({ required: true })}
        />
      </div>
    </div>
  )

  const renderLowerInput = () => (
    <div className="form__input-stack form__input-stack--lower">
      <div className="form__input-group">
        <label className="form__input-label">{t('username')}</label>
        <input
          name="username"
          type="text"
          className="form__input"
          value={inputValue.username}
          onChange={handleInputChange}
          ref={register({ required: true })}
        />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('email')}</label>
        <input
          name="email"
          type="text"
          className="form__input"
          value={inputValue.email}
          onChange={handleInputChange}
          ref={register({ required: true })}
        />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('password')}</label>
        <input
          name="password"
          type="text"
          className="form__input"
          value={inputValue.password}
          onChange={handleInputChange}
          ref={register({ required: true })}
        />
      </div>
    </div>
  )

  const renderFormActionable = () => (
    <div className="form__actionable">
      <div className="form__recaptcha">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!}
          onChange={handleRecaptchaChange}
        />
      </div>
      <input
        type="submit"
        className="form__button"
        value={t('register')}
        ref={register({ required: true })}
      />
    </div>
  )

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      {renderProfileUpload()}
      {/* TODO: Change these inputs according to the design */}
      {renderUpperInput()}
      {renderLowerInput()}
      {renderFormActionable()}
    </form>
  )
}

export default Form
