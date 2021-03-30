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
    // TODO: Send POST request to backend
    console.log('Request Body: ', value)

    // router.push('/sign-up-success')
  }

  const canDisableFormSubmit = (
    inputValue: FormInput,
    isRecaptchaVerified: boolean,
    isProfileUploaded: boolean
  ): boolean => {
    const emptyInputValues: [string, null][] = Object.entries(inputValue).filter(([key, value]) => !value)
    const hasEmptyInputValue: boolean = emptyInputValues.length > 0

    return hasEmptyInputValue || !isRecaptchaVerified || !isProfileUploaded
  }

  const renderProfileUpload = (handleProfileUpload: (isUploaded: boolean) => void) => (
    <div className="form__profile">
      <ProfileUpload onUploaded={handleProfileUpload} />
    </div>
  )

  const renderUpperInput = (errors: DeepMap<FormInput, FieldError>) => {
    const NAME_PATTERN_VALUE: RegExp = new RegExp(/^[a-z ,.'-]+$/i)

    return (
      <div className="form__input-stack form__input-stack--upper">
        <TextField
          name="firstName"
          label={t('firstName')}
          inputType="text"
          placeholder={t('firstNamePlaceholder')}
          errorMessage={errors.firstName?.message}
          onChange={handleInputChange}
          reference={register({
            required: true,
            pattern: {
              value: NAME_PATTERN_VALUE,
              message: t('inputImproperName')
            }
          })}
        />
        <TextField
          name="lastName"
          label={t('lastName')}
          inputType="text"
          placeholder={t('lastNamePlaceholder')}
          errorMessage={errors.lastName?.message}
          onChange={handleInputChange}
          reference={register({
            required: true,
            pattern: {
              value: NAME_PATTERN_VALUE,
              message: t('inputImproperName')
            }
          })}
        />
      </div>
    )
  }

  const renderLowerInput = (errors: DeepMap<FormInput, FieldError>) => {
    const MINIMUM_PASSWORD_LENGTH: number = 8
    const EMAIL_PATTERN_VALUE: RegExp = new RegExp(/\S+@\S+\.\S+/)
    const PASSWORD_PATTERN_VALUE: RegExp = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/)

    return (
      <div className="form__input-stack form__input-stack--lower">
        <TextField
          name="username"
          label={t('username')}
          inputType="text"
          placeholder={t('usernamePlaceholder')}
          errorMessage={errors.username?.message}
          onChange={handleInputChange}
          reference={register({
            required: true
            // TODO: Handle error when username is already taken
            // validate: {
            //   value: value => value,
            //   message: t('usernameAlreadyUsed')
            // }
          })}
        />
        <TextField
          name="email"
          label={t('email')}
          inputType="text"
          placeholder={t('emailPlaceholder')}
          errorMessage={errors.email?.message}
          onChange={handleInputChange}
          reference={register({
            required: true,
            pattern: {
              value: EMAIL_PATTERN_VALUE,
              message: t('emailIncorrectFormat')
            }
          })}
        />
        <PasswordField
          name="password"
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          errorMessage={errors.password?.message}
          onChange={handleInputChange}
          reference={register({
            required: true,
            minLength: {
              value: MINIMUM_PASSWORD_LENGTH,
              message: t('passwordCharactersMinimum')
            },
            pattern: {
              value: PASSWORD_PATTERN_VALUE,
              message: t('passwordRequiredFormat')
            }
          })}
        />
      </div>
    )
  }

  const renderFormActionable = (canDisableFormSubmit: boolean) => (
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
      {/* TODO: Change these inputs according to the design */}
      {renderUpperInput(errors)}
      {renderLowerInput(errors)}
      {renderFormActionable(canDisableFormSubmit(getValues(), isRecaptchaVerified, isProfileUploaded))}
    </form>
  )
}

export default Form
