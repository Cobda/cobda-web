import React, { useEffect, useState } from 'react'
// import { signIn, signOut } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import TextField from '../InputField/TextField'
import PasswordField from '../InputField/PasswordField'
import { signIn, signOut } from 'next-auth/client'

const Form = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const router = useRouter()
  const { t } = useTranslation('sign-in')

  useEffect(() => {
    console.log('Router: ', router)
    // Getting the error details from URL
    if (router.query.error) {
      setErrorMessage('Username is invalid') // Shown below the input field in my example
    }
  }, [router])

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    signIn('credentials', {
      email: email,
      password: password,
      callbackUrl: '/'
    })
  }

  const renderCredentialInput = () => {
    const handleInputChange = (setValue: (value: string) => void) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    }

    return (
      <div className="form__input-initial">
        <TextField
          expanded
          name="email"
          value={email}
          label={t('email')}
          inputType="text"
          placeholder={t('emailPlaceholder')}
          errorMessage={errorMessage}
          onChange={handleInputChange(setEmail)}
        />
        <PasswordField
          expanded
          name="password"
          value={password}
          label={t('password')}
          placeholder={t('passwordPlaceholder')}
          onChange={handleInputChange(setPassword)}
        />
      </div>
    )
  }

  const renderActionable = () => {
    const isFormSubmitDisabled: boolean = !email || !password

    return (
      <div className="form__actionable">
        <button className="form__button" disabled={isFormSubmitDisabled} onClick={handleSubmitClick}>
          {t('signIn')}
        </button>
      </div>
    )
  }

  return (
    <form className="form">
      {renderCredentialInput()}
      {renderActionable()}
    </form>
  )
}

export default Form
