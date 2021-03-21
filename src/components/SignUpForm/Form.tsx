import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import useTranslation from 'next-translate/useTranslation'
import ProfileUpload from '../ProfileUpload'
import { useForm } from 'react-hook-form'

interface FormInputs {
  readonly email: string
  readonly firstName: string
  readonly lastname: string
  readonly username: string
  readonly password: string
}

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
  const [isRecaptchaVerified, setRecaptchaVerified] = useState<boolean>(false)
  const router = useRouter()
  const { t } = useTranslation('sign-up')
  const { register, handleSubmit, errors } = useForm()

  const handleFormSubmit = (value: FormInputs) => {
    console.log('Value: ', value)
    // router.push('/sign-up-success')
  }

  const handleRecaptchaChange = () => {
    setRecaptchaVerified(true)
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
          ref={register({ required: true })}
        />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('surname')}</label>
        <input
          name="lastName"
          type="text"
          className="form__input"
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
          ref={register({ required: true })}
        />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('email')}</label>
        <input
          name="email"
          type="text"
          className="form__input"
          ref={register({ required: true })}
        />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('password')}</label>
        <input
          name="password"
          type="text"
          className="form__input"
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
