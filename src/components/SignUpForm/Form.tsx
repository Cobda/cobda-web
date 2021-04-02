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
  const { register, handleSubmit, setValue, watch, errors } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: initialInputValue
  })
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  useEffect(() => {
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (isProfileUploaded) {
        event.preventDefault()
        event.returnValue = t('warningText')
      }
    }

    const handleBrowseAway = () => {
      if (isProfileUploaded && !window.confirm(t('warningText'))) {
        router.events.emit('routeChangeError')
        throw 'routeChange aborted.'
      }
    }

    watch()
    window.addEventListener('beforeunload', handleWindowClose)
    router.events.on('routeChangeStart', handleBrowseAway)

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose)
      router.events.off('routeChangeStart', handleBrowseAway)
    }
  }, [isProfileUploaded])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValue(name as keyof FormInput, value)
  }

  const handleRecaptchaChange = () => {
    setRecaptchaVerified((previousState) => !previousState)
  }

  const handleFormSubmit = (setProfileUploaded: (isUploaded: boolean) => void) => (value: FormInput) => {
    // TODO: Send POST request to backend and verify if username is already taken
    setProfileUploaded(false)
    router.push('/sign-up-success')
  }

  const getErrorMessage = (errors: DeepMap<FormInput, FieldError>, inputKey: keyof FormInput): string => {
    const errorMessage: string | undefined = errors[inputKey]?.message
    return errorMessage ? errorMessage : ''
  }

  const canDisableFormSubmit = (
    isRecaptchaVerified: boolean,
    isProfileUploaded: boolean,
    errors: DeepMap<FormInput, FieldError>
  ): boolean => {
    const hasInputError: boolean = Object.keys(errors).length > 0

    return !isRecaptchaVerified || !isProfileUploaded || hasInputError
  }

  const renderProfileUpload = (handleProfileUpload: (isUploaded: boolean) => void) => (
    <div className="form__profile">
      <ProfileUpload onUpload={handleProfileUpload} />
    </div>
  )

  const renderUpperInput = (
    handleRegister: (validator: Object) => (ref: HTMLInputElement) => void,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    errors: DeepMap<FormInput, FieldError>
  ) => {
    const NAME_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z' ,.'-]+$/i)

    const getNameReference: (ref: HTMLInputElement) => void = handleRegister({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
      pattern: {
        value: NAME_PATTERN_VALUE,
        message: t('inputImproperName')
      }
    })

    return (
      <div className="form__input-full-name">
        <TextField
          name="firstName"
          label={t('firstName')}
          inputType="text"
          placeholder={t('firstNamePlaceholder')}
          errorMessage={getErrorMessage(errors, 'firstName')}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="lastName"
          label={t('lastName')}
          inputType="text"
          placeholder={t('lastNamePlaceholder')}
          errorMessage={getErrorMessage(errors, 'lastName')}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
      </div>
    )
  }

  const renderLowerInput = (
    handleRegister: (validator: Object) => (ref: HTMLInputElement) => void,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    errors: DeepMap<FormInput, FieldError>
  ) => {
    const MINIMUM_USERNAME_LENGTH: number = 6
    const MINIMUM_PASSWORD_LENGTH: number = 8
    const USERNAME_PATTERN_VALUE: RegExp = new RegExp(/^(?![_.])(?!.*[_.]{2})[\u0E00-\u0E7Fa-zA-Z0-9._]+(?<![_.])$/)
    const EMAIL_PATTERN_VALUE: RegExp = new RegExp(/\S+@\S+\.\S+/)
    const PASSWORD_PATTERN_VALUE: RegExp = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])/)

    const getUsernameReference: (ref: HTMLInputElement) => void = handleRegister({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
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

    const getEmailReference: (ref: HTMLInputElement) => void = handleRegister({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
      pattern: {
        value: EMAIL_PATTERN_VALUE,
        message: t('emailIncorrectFormat')
      }
    })

    const getPasswordReference: (ref: HTMLInputElement) => void = handleRegister({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
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
      <div className="form__input-credential">
        <TextField
          name="username"
          label={t('username')}
          inputType="text"
          placeholder={t('usernamePlaceholder')}
          errorMessage={getErrorMessage(errors, 'username')}
          onChange={handleInputChange}
          inputRef={getUsernameReference}
        />
        <TextField
          name="email"
          label={t('email')}
          inputType="text"
          placeholder={t('emailPlaceholder')}
          errorMessage={getErrorMessage(errors, 'email')}
          onChange={handleInputChange}
          inputRef={getEmailReference}
        />
        <PasswordField
          name="password"
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          errorMessage={getErrorMessage(errors, 'password')}
          onChange={handleInputChange}
          inputRef={getPasswordReference}
        />
      </div>
    )
  }

  const renderActionable = (handleRecaptchaChange: () => void, canDisableFormSubmit: boolean) => (
    <div className="form__actionable">
      <div className="form__recaptcha">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!} onChange={handleRecaptchaChange} />
      </div>
      <input className="form__button" type="submit" value={t('register')} disabled={canDisableFormSubmit} />
    </div>
  )

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit(setProfileUploaded))}>
      {renderProfileUpload(setProfileUploaded)}
      {renderUpperInput(register, handleInputChange, errors)}
      {renderLowerInput(register, handleInputChange, errors)}
      {renderActionable(handleRecaptchaChange, canDisableFormSubmit(isRecaptchaVerified, isProfileUploaded, errors))}
    </form>
  )
}

export default Form
