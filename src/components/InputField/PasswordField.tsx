import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly name: string
  readonly label: string
  readonly placeholder: string
  readonly errorMessage: string
}

const PasswordField = ({ label, placeholder, errorMessage }: PasswordField) => {
  const [isPasswordShown, setPasswordShown] = useState(false)

  const handlePasswordToggle = () => {
    setPasswordShown(!isPasswordShown)
  }

  const renderEyeIcon = () => {
    const imageSelected: string = isPasswordShown
      ? '/icons/visible-eye-icon.svg'
      : '/icons/invisible-eye-icon.svg'

    return (
      <div className="form__eye-icon" onClick={handlePasswordToggle}>
        <Image src={imageSelected} height={17} width={21} />
      </div>
    )
  }

  const renderInput = () => {
    const placeholderText: string = errorMessage ? placeholder : ''
    const inputType: string = isPasswordShown ? 'text' : 'password'
    const inputClassName: string = errorMessage
      ? 'form__input'
      : 'form__input form__input--invalid'

    const renderErrorMessage = () =>
      errorMessage ? <span className="form__help">{errorMessage}</span> : <></>

    return (
      <>
        <input
          className={inputClassName}
          type={inputType}
          placeholder={placeholderText}
        />
        {renderEyeIcon()}
        {renderErrorMessage()}
      </>
    )
  }

  return (
    <div className="form__input-group">
      <label className="form__input-label">{label}</label>
      <div className="form__input-password">{renderInput()}</div>
    </div>
  )
}

export default PasswordField
