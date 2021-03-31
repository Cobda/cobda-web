import React, { useEffect, useState } from 'react'
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
  password: ''
}

const Form = () => {
  const [isProfileUploaded, setProfileUploaded] = useState<boolean>(false)
  const [isRecaptchaVerified, setRecaptchaVerified] = useState<boolean>(false)
  const { register, handleSubmit, getValues, setValue, watch, errors } = useForm<FormInput>({
    defaultValues: initialInputValue
  })
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  useEffect(watch, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValue(name as keyof FormInput, value)
  }

  const handleRecaptchaChange = () => {
    setRecaptchaVerified((previousState) => !previousState)
  }

  const handleFormSubmit = (value: FormInput) => {
    // TODO: Send POST request to backend and verify if username is already taken
    router.push('/sign-up-success')
  }

  const canDisableFormSubmit = (
    inputValue: FormInput,
    isRecaptchaVerified: boolean,
    isProfileUploaded: boolean
  ): boolean => {
    const emptyInputValue: [string, null][] = Object.entries(inputValue).filter(([key, value]) => !value)
    const hasEmptyInputValue: boolean = emptyInputValue.length > 0

    return hasEmptyInputValue || !isRecaptchaVerified || !isProfileUploaded
  }

  const renderProfileUpload = (handleProfileUpload: (isUploaded: boolean) => void) => (
    <div className="form__profile">
      <ProfileUpload onUploaded={handleProfileUpload} />
    </div>
  )

  const renderUpperInput = (
    errors: DeepMap<FormInput, FieldError>,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleRegister: (validator: Object) => (ref: HTMLInputElement) => void
  ) => {
    const NAME_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z' ,.'-]+$/i)
    const nameReference: (ref: HTMLInputElement) => void = handleRegister({
      required: true,
      pattern: {
        value: NAME_PATTERN_VALUE,
        message: t('inputImproperName')
      }
    })

    return (
      <div className="form__input-stack form__input-stack--upper">
        <TextField
          name="firstName"
          label={t('firstName')}
          inputType="text"
          placeholder={t('firstNamePlaceholder')}
          errorMessage={errors.firstName?.message}
          onChange={handleInputChange}
          reference={nameReference}
        />
        <TextField
          name="lastName"
          label={t('lastName')}
          inputType="text"
          placeholder={t('lastNamePlaceholder')}
          errorMessage={errors.lastName?.message}
          onChange={handleInputChange}
          reference={nameReference}
        />
      </div>
    )
  }

  const renderLowerInput = (
    errors: DeepMap<FormInput, FieldError>,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleRegister: (validator: Object) => (ref: HTMLInputElement) => void
  ) => {
    const MINIMUM_USERNAME_LENGTH: number = 6
    const MINIMUM_PASSWORD_LENGTH: number = 8
    const USERNAME_PATTERN_VALUE: RegExp = new RegExp(/(?![_.])(?!.*[_.]{2})[\u0E00-\u0E7Fa-zA-Z0-9._]+(?<![_.])$/)
    const EMAIL_PATTERN_VALUE: RegExp = new RegExp(/\S+@\S+\.\S+/)
    const PASSWORD_PATTERN_VALUE: RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/)
    const usernameReference: (ref: HTMLInputElement) => void = handleRegister({
      required: true,
      minLength: {
        value: MINIMUM_USERNAME_LENGTH,
        message: t('usernameCharactersMinimum')
      },
      pattern: {
        value: USERNAME_PATTERN_VALUE,
        message: t('inputImproperName')
      }
      // validate: {
      //   TODO: Handle error when username is already taken
      // }
    })
    const emailReference: (ref: HTMLInputElement) => void = handleRegister({
      required: true,
      pattern: {
        value: EMAIL_PATTERN_VALUE,
        message: t('emailIncorrectFormat')
      }
    })
    const passwordReference: (ref: HTMLInputElement) => void = handleRegister({
      required: true,
      minLength: {
        value: MINIMUM_PASSWORD_LENGTH,
        message: t('passwordCharactersMinimum')
      },
      pattern: {
        value: PASSWORD_PATTERN_VALUE,
        message: t('passwordRequiredFormat')
      }
    })

    return (
      <div className="form__input-stack form__input-stack--lower">
        <TextField
          name="username"
          label={t('username')}
          inputType="text"
          placeholder={t('usernamePlaceholder')}
          errorMessage={errors.username?.message}
          onChange={handleInputChange}
          reference={usernameReference}
        />
        <TextField
          name="email"
          label={t('email')}
          inputType="text"
          placeholder={t('emailPlaceholder')}
          errorMessage={errors.email?.message}
          onChange={handleInputChange}
          reference={emailReference}
        />
        <PasswordField
          name="password"
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          errorMessage={errors.password?.message}
          onChange={handleInputChange}
          reference={passwordReference}
        />
      </div>
    )
  }

  const renderFormActionable = (handleRecaptchaChange: () => void, canDisableFormSubmit: boolean) => (
    <div className="form__actionable">
      <div className="form__recaptcha">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!} onChange={handleRecaptchaChange} />
      </div>
      <input className="form__button" type="submit" value={t('register')} disabled={canDisableFormSubmit} />
    </div>
  )

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      {renderProfileUpload(setProfileUploaded)}
      {renderUpperInput(errors, handleInputChange, register)}
      {renderLowerInput(errors, handleInputChange, register)}
      {renderFormActionable(
        handleRecaptchaChange,
        canDisableFormSubmit(getValues(), isRecaptchaVerified, isProfileUploaded)
      )}
    </form>
  )
}

export default Form
