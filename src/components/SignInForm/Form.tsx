import React, { useEffect, useState } from 'react'
// import { signIn, signOut } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

interface FormInput {
  readonly email: string
  readonly password: string
}

const initialInputValue: FormInput = {
  email: '',
  password: ''
}

const Form = () => {
  // TODO: Further implement this
  // const [loginError, setLoginError] = useState('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const router = useRouter()
  const { t } = useTranslation('sign-in')
  const { register, handleSubmit, getValues, setValue, watch, errors } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: initialInputValue
  })

  useEffect(() => {
    // Getting the error details from URL
    if (router.query.error) {
      // setLoginError(router.query.error) // Shown below the input field in my example
      // setEmail(router.query.email) // To prefill the email after redirect
    }
  }, [router])

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    // signIn('credentials', {
    //   email: email,
    //   password: password,
    //   callbackUrl: '/'
    // })
  }

  return (
    <form className="form">
      <div className="form__input-group">
        <label className="form__input-label">{t('email')}</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">{t('password')}</label>
        <input type="password" className="form__input" />
      </div>
      <div className="form__actionable">
        <button className="form__button" onClick={handleSubmitClick}>
          {t('signIn')}
        </button>
      </div>
    </form>
  )
}

export default Form
