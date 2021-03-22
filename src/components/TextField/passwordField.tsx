import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly name: string
  readonly label: string
  readonly placeholder: string
  readonly errorInput: string
}

const PasswordField = ({ label, placeholder, errorInput }: PasswordField) => {
  const [isPasswordShown, setPasswordShown] = useState(false)

  const handlePasswordVisiblity = () => {
    setPasswordShown(!isPasswordShown)
  }

  const renderValidInput = () => (
    <>
      <input
        className="form__input"
        type={isPasswordShown ? 'text' : 'password'}
        placeholder={placeholder}
      />
      {renderEyeIcon()}
    </>
  )

  const renderInvalidInput = () => (
    <>
      <input
        className="form__input form__input--invalid"
        type={isPasswordShown ? 'text' : 'password'}
      />
      {renderEyeIcon()}
      <div className="form__error">{errorInput}</div>
    </>
  )

  const renderEyeIcon = () => (
    <i className="form__eye-icon">
      <Image src={isPasswordShown ? '/icons/eye-icon.svg' : '/icons/invisible-eye-icon.svg'}
        height={17}
        width={21}
        onClick={handlePasswordVisiblity}
      />
    </i>
  )

  return (
    <>
      <div className="form__group">
        <label className="form__input-label">{label}</label>
        <div className="form__input-password">
          {!errorInput ? renderValidInput() : renderInvalidInput()}
        </div>
      </div>
    </>
  )
}

export default PasswordField
