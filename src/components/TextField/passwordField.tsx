import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly label: String
  readonly isValueValid?: boolean
}

const PasswordField = ({ label, isValueValid }: PasswordField) => {
  const [passwordShown, setPasswordShown] = useState(false)

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown)
  }

  const renderValidInput = () => (
    <div className="form__input-group">
      <input
        placeholder="Enter your Password"
        type={passwordShown ? 'text' : 'password'}
        className="form__input"
      />
      {renderEyeIcon()}
    </div>
  )

  const renderInvalidInput = () => (
    <>
      <div className="form__input-group">
        <input
          type={passwordShown ? 'text' : 'password'}
          className="form__input form__input--invalid"
        />
        {renderEyeIcon()}
      </div>
      <div className="form__error">sample</div>
    </>
  )

  const renderEyeIcon = () => (
    <div className="form__eye-icon">
      <Image
        src={passwordShown ? '/icons/eye.svg' : '/icons/invisible.svg'}
        height={17}
        width={21}
        onClick={togglePasswordVisiblity}
      />
    </div>
  )

  return (
    <>
      <div className="form__group">
        <label className="form__input-label">{label}</label>
        {isValueValid ? renderValidInput() : renderInvalidInput()}
      </div>
    </>
  )
}

export default PasswordField
