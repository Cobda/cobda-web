import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'

interface FormInput {
  readonly email: string
  readonly firstName: string
  readonly lastName: string
  readonly username: string
  readonly password: string
}

const initialInputValue: FormInput = {
  email: '',
  firstName: '',
  lastName: '',
  username: '',
  password: '',
}

const Form = () => {
  const [inputValue, setInputValue] = useState<FormInput>(initialInputValue)
  const [isProfileUploaded, setProfileUploaded] = useState<boolean>(false)
  const [isRecaptchaVerified, setRecaptchaVerified] = useState<boolean>(false)
  const { register, handleSubmit, errors } = useForm<FormInput>()
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  const handleInputChange = (inputValue: FormInput) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target
    setInputValue({ ...inputValue, [name]: value })
  }

  const handleRecaptchaChange = () => {
    setRecaptchaVerified(!isRecaptchaVerified)
  }

  const handleFormSubmit = (value: FormInput) => {
    // TODO: Send POST request to backend
    // router.push('/sign-up-success')
  }

  const renderProfileUpload = () => (
    <div className="form__profile">
      <ProfileUpload onUploaded={setProfileUploaded} />
    </div>
  )

  const renderUpperInput = () => (
    <div className="form__input-stack form__input-stack--upper">
      <TextField
        name="firstName"
        label={t('firstName')}
        inputType="text"
        inputValue={inputValue.firstName}
        placeholder={t('firstNamePlaceholder')}
        errorMessage={errors.firstName?.message}
        onChange={handleInputChange(inputValue)}
        reference={register({
          required: true
        })}
      />
      <TextField
        name="lastName"
        label={t('lastName')}
        inputType="text"
        inputValue={inputValue.lastName}
        placeholder={t('lastNamePlaceholder')}
        errorMessage={errors.lastName?.message}
        onChange={handleInputChange(inputValue)}
        reference={register({
          required: true
        })}
      />
    </div>
  )

  const renderLowerInput = () => (
    <div className="form__input-stack form__input-stack--lower">
      <TextField
        name="username"
        label={t('username')}
        inputType="text"
        inputValue={inputValue.username}
        placeholder={t('usernamePlaceholder')}
        errorMessage={''}
        onChange={handleInputChange(inputValue)}
        reference={register({
          required: true,
        })}
      />
      <TextField
        name="email"
        label={t('email')}
        inputType="text"
        inputValue={inputValue.email}
        placeholder={t('emailPlaceholder')}
        errorMessage={errors.email?.message}
        onChange={handleInputChange(inputValue)}
        reference={register({
          required: true,
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: t('emailIncorrectFormat'),
          },
        })}
      />
      <PasswordField
        name="password"
        label={t('password')}
        inputValue={inputValue.password}
        placeholder={t('passwordPlaceholder')}
        errorMessage={errors.password?.message}
        onChange={handleInputChange(inputValue)}
        reference={register({
          required: true,
          minLength: {
            value: 8,
            message: t('passwordCharactersMinimum'),
          },
          pattern: {
            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
            message: t('passwordRequiredFormat'),
          },
        })}
      />
    </div>
  )

  const renderFormActionable = () => {
    const emptyInputValues: [string, null][] = Object.entries(
      inputValue
    ).filter(([key, value]) => !value)
    const hasEmptyInputValue: boolean = emptyInputValues.length > 0
    const isFormIncompleted: boolean =
      !isRecaptchaVerified || !isProfileUploaded || hasEmptyInputValue

    return (
      <div className="form__actionable">
        <div className="form__recaptcha">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!}
            onChange={handleRecaptchaChange}
          />
        </div>
        <input
          disabled={isFormIncompleted}
          type="submit"
          className="form__button"
          value={t('register')}
        />
      </div>
    )
  }

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
