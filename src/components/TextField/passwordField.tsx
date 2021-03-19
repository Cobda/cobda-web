import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly label: String
  readonly isValid?: boolean
  readonly errorInput: String
}

const PasswordField = ({ label, isValid, errorInput }: PasswordField) => {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  const handleValid = () => (
    <div className="form__input-group">
      <input
        placeholder="Enter your password"
        type={passwordShown ? 'text' : 'password'}
        className="form__input"
      />
    </div>
  )

  const handleInvalid = () => (
    <>
      <div className="form__input-group">
        <input
          type={passwordShown ? 'text' : 'password'}
          className="form__input form__input--invalid"
        />
        <div className="form__eye-icon">
          <Image
            src={passwordShown ? '/icons/eye.svg' : '/icons/invisible.svg'}
            height={17}
            width={21}
            onClick={togglePasswordVisiblity}
          />
        </div>
      </div>
      <div className="form__error">{errorInput}</div>
    </>
  )

  return (
    <>
      <div className="form__group">
        <label className="form__input-label">{label}</label>
        {isValid ? handleValid() : handleInvalid()}
      </div>
    </>
  )
}

export default PasswordField
