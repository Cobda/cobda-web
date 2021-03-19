import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import useTranslation from 'next-translate/useTranslation'
import ProfileUpload from '../ProfileUpload'

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

  const handleSubmitClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    router.push('/sign-up-success')
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
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('surname')}</label>
        <input type="text" className="form__input" />
      </div>
    </div>
  )

  const renderLowerInput = () => (
    <div className="form__input-stack form__input-stack--lower">
      <div className="form__input-group">
        <label className="form__input-label">{t('username')}</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('email')}</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('password')}</label>
        <input type="text" className="form__input" />
      </div>
    </div>
  )

  const renderFormActionable = () => (
    <div className="form__actionable">
      <div className="form__recaptcha">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!} />
      </div>
      <a className="form__button" onClick={handleSubmitClick}>
        {t('register')}
      </a>
    </div>
  )

  return (
    <form className="form">
      {renderProfileUpload()}
      {/* TODO: Change these inputs according to the design */}
      {renderUpperInput()}
      {renderLowerInput()}
      {renderFormActionable()}
    </form>
  )
}

export default Form
