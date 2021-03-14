import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ReCAPTCHA from 'react-google-recaptcha'
import ProfileUpload from '../ProfileUpload'

const Form = () => {
  const router = useRouter()
  const [passwordShown, setPasswordShown] = useState(false)
  const [validate, setValidate] = useState({ name: '', email: "", password: "" });

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push('/sign-up-success')
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  return (
    <form className="form">
      <header className="form__header">
        <h2 className="form__title">Sign up</h2>
      </header>

      <div className="form__devide">
        <div className="form__input-group">
          <label className="form__input-label">First Name</label>
          <input
            placeholder="Enter your first name"
            type="text"
            className="form__input"
          />
        </div>
        <div className="form__input-group">
          <label className="form__input-label">Surname</label>
          <input
            placeholder="Enter your surname"
            type="text"
            className="form__input"
          />
        </div>
        <div className="form__input-group">
          <label className="form__input-label">Username</label>
          <input
            placeholder="Enter your username"
            type="text"
            className="form__input"
          />
        </div>
        <div className="form__input-group">
          <label className="form__input-label">Email</label>
          <input
            placeholder="Enter your email"
            type="email"
            className="form__input"
            required
          />
        </div>
        <div className="form__input-group">
          <label className="form__input-label">Password</label>
          <input
            placeholder="Enter yur password"
            type={passwordShown ? 'text' : 'password'}
            className="form__input"
          />
          <Image
            src={passwordShown ? '/icons/eye.svg' : '/icons/invisible.svg'}
            className="form__password-icon"
            height={17}
            width={21}
            onClick={togglePasswordVisiblity}
          />
        </div>
      </div>
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
