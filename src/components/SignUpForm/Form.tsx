import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { signIn } from 'next-auth/client'

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

const NAME_VALIDATION_INDEX = 1
const CREDENTIAL_VALIDATION_INDEX: number = 3
const MINIMUM_USERNAME_LENGTH: number = 6
const MINIMUM_PASSWORD_LENGTH: number = 8
const NAME_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z' ,.'-]+$/i)
const USERNAME_PATTERN_VALUE: RegExp = new RegExp(/^(?![_.])(?!.*[_.]{2})[\u0E00-\u0E7Fa-zA-Z0-9._]+(?<![_.])$/)
const EMAIL_PATTERN_VALUE: RegExp = new RegExp(/\S+@\S+\.\S+/)
const PASSWORD_PATTERN_VALUE: RegExp = new RegExp(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])/)

const Form = () => {
  const [profileImageUrl, setProfileImageUrl] = useState('')
  const [isRecaptchaVerified, setRecaptchaVerified] = useState<boolean>(false)
  const [isImageVerified, setImageVerified] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { register, handleSubmit, getValues, setValue, watch, errors } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: initialInputValue
  })
  const router = useRouter()
  const { t } = useTranslation('sign-up')
  const hasProfileImage: boolean = !!profileImageUrl

  useEffect(() => {
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (hasProfileImage) {
        event.preventDefault()
        event.returnValue = t('warningText')
      }
    }

    const handleBrowseAway = () => {
      if (hasProfileImage && !window.confirm(t('warningText'))) {
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
  }, [profileImageUrl])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValue(name as keyof FormInput, value)
  }

  const handleFormSubmit = async (value: FormInput) => {
    const body = { ...value, profileImagePath: profileImageUrl }
    await axios
      .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/`, body)
      .then(() => {
        const { email, password } = value
        setProfileImageUrl('')
        signIn('credentials', {
          email: email,
          password: password,
          callbackUrl: '/'
        })
      })
      .catch(() => setErrorMessage(t('emailUsernameAlreadyUsed')))
  }

  const getErrorMessage = (inputKey: keyof FormInput, startValidationIndex: number): string => {
    const errorMessage: string | undefined = errors[inputKey]?.message
    const inputLength: number = getValues()[inputKey]?.length
    const isErrorDisplayed: boolean | undefined = inputLength >= startValidationIndex || inputLength === 0

    return errorMessage && isErrorDisplayed ? errorMessage : ''
  }

  const renderProfileUpload = () => (
    <div className="form__profile">
      <ProfileUpload
        imageUrl={profileImageUrl}
        isImageVerified={isImageVerified}
        onUpload={setProfileImageUrl}
        onImageVerified={setImageVerified}
      />
    </div>
  )

  const renderFullNameInput = () => {
    const getNameReference: (ref: HTMLInputElement) => void = register({
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
          errorMessage={getErrorMessage('firstName', NAME_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="lastName"
          label={t('lastName')}
          inputType="text"
          placeholder={t('lastNamePlaceholder')}
          errorMessage={getErrorMessage('lastName', NAME_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
      </div>
    )
  }

  const renderCredentialInput = () => {
    const requiredProperty: Object = {
      required: {
        value: true,
        message: t('inputValueRequired')
      }
    }
    const getUsernameReference: (ref: HTMLInputElement) => void = register({
      ...requiredProperty,
      minLength: {
        value: MINIMUM_USERNAME_LENGTH,
        message: t('usernameCharactersMinimum')
      },
      pattern: {
        value: USERNAME_PATTERN_VALUE,
        message: t('inputImproperName')
      }
    })

    const getEmailReference: (ref: HTMLInputElement) => void = register({
      ...requiredProperty,
      pattern: {
        value: EMAIL_PATTERN_VALUE,
        message: t('emailIncorrectFormat')
      }
    })

    const getPasswordReference: (ref: HTMLInputElement) => void = register({
      ...requiredProperty,
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
          errorMessage={getErrorMessage('username', CREDENTIAL_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getUsernameReference}
        />
        <TextField
          name="email"
          label={t('email')}
          inputType="text"
          placeholder={t('emailPlaceholder')}
          errorMessage={getErrorMessage('email', CREDENTIAL_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getEmailReference}
        />
        <PasswordField
          name="password"
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          errorMessage={getErrorMessage('password', CREDENTIAL_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getPasswordReference}
        />
      </div>
    )
  }

  const renderActionable = () => {
    const hasInputError: boolean = Object.keys(errors).length > 0
    const isFormSubmitDisabled: boolean = !isRecaptchaVerified || !isImageVerified || !hasProfileImage || hasInputError

    const handleRecaptchaChange = () => {
      setRecaptchaVerified((previousState) => !previousState)
    }

    const renderErrorMessage = () =>
      errorMessage ? <div className="form__help form__help--center">{errorMessage}</div> : <></>

    return (
      <div className="form__actionable">
        <div className="form__recaptcha">
          <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!} onChange={handleRecaptchaChange} />
        </div>
        <input className="form__button" type="submit" value={t('register')} disabled={isFormSubmitDisabled} />
        {renderErrorMessage()}
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      {renderProfileUpload()}
      {renderFullNameInput()}
      {renderCredentialInput()}
      {renderActionable()}
    </form>
  )
}

export default Form
