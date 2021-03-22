import React from 'react'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'
import CommonField from '../TextField'
import PasswordField from '../TextField/passwordField'

const Form = () => {
  const router = useRouter()

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/sign-up-success')
  }

  return (
    <form className="form">
      <header className="form__header">
        <h2 className="form__title">Sign up</h2>
      </header>
      <CommonField label="Username" inputType="text" isValueValid={true} />
      <CommonField label="Email" inputType="email" isValueValid={true} />
      <PasswordField label="Password" isValueValid={true} />
      <CommonField label="First Name" inputType="text" isValueValid={true} />
      <CommonField label="Surname" inputType="text" isValueValid={true} />
      <div className="form__recaptcha">
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!} />
      </div>
      <div className="form__actionable">
        <button className="form__button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
