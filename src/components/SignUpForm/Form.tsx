import React, { useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import useTranslation from 'next-translate/useTranslation'
import { DeepMap, FieldError, useForm } from 'react-hook-form'

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
    setRecaptchaVerified((previousState) => !previousState)
  }

  const handleFormSubmit = (value: FormInput) => {
    // TODO: Send POST request to backend
    // router.push('/sign-up-success')
  }

  const canDisableFormSubmit = (inputValue: FormInput, isRecaptchaVerified: boolean, isProfileUploaded: boolean ): boolean => {
    const emptyInputValues: [string, null][] = Object.entries(
      inputValue
    ).filter(([key, value]) => !value)
    const hasEmptyInputValue: boolean = emptyInputValues.length > 0

    return hasEmptyInputValue || !isRecaptchaVerified || !isProfileUploaded
  }

  const renderProfileUpload = (handleProfileUpload: (isUploaded: boolean) => void) => (
    <div className="form__profile">
      <ProfileUpload onUploaded={handleProfileUpload} />
    </div>
  )

  const renderUpperInput = (inputValue: FormInput, errors: DeepMap<FormInput, FieldError>) => (
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
          required: true,
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
          required: true,
        })}
      />
    </div>
  )

  const renderLowerInput = (inputValue: FormInput, errors: DeepMap<FormInput, FieldError>) => {
    const MINIMUM_INPUT_LENGTH: number = 8

    return (
      <div className="form__input-stack form__input-stack--lower">
        <TextField
          name="username"
          label={t('username')}
          inputType="text"
          inputValue={inputValue.username}
          placeholder={t('usernamePlaceholder')}
          // TODO: Handle error when username is already taken
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
              value: MINIMUM_INPUT_LENGTH,
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
  }

  const renderFormActionable = (canDisableFormSubmit: boolean) => (
    <div className="form__actionable">
      <div className="form__recaptcha">
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!}
          onChange={handleRecaptchaChange}
        />
      </div>
      <input
        disabled={canDisableFormSubmit}
        type="submit"
        className="form__button"
        value={t('register')}
      />
    </div>
  )
  

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      {renderProfileUpload(setProfileUploaded)}
      {/* TODO: Change these inputs according to the design */}
      {renderUpperInput(inputValue, errors)}
      {renderLowerInput(inputValue, errors)}
      {renderFormActionable(canDisableFormSubmit(inputValue, isRecaptchaVerified, isProfileUploaded))}
    </form>
  )
}

export default Form
