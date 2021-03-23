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
  const placeholderDisplay: string = errorMessage && placeholder
  const inputType: string = isPasswordShown ? 'text' : 'password'

  const imageSelected: string = isPasswordShown
    ? '/icons/visible-eye-icon.svg'
    : '/icons/invisible-eye-icon.svg'

  const inputClassName: string = errorMessage
    ? 'form__input'
    : 'form__input form__input--invalid'


  const helpClassName: string = errorMessage
    ? 'form__help'
    : 'form__help form__help--visible'

  const handlePasswordToggle = () => {
    setPasswordShown(!isPasswordShown)
  }

  const renderEyeIcon = () => (
    <i className="form__eye-icon">
      <Image
        src={imageSelected}
        height={17}
        width={21}
        onClick={handlePasswordToggle}
      />
    </i>
  )

  const renderInput = () => (
    <>
      <input
        className={inputClassName}
        type={inputType}
        placeholder={placeholderDisplay}
      />
      {renderEyeIcon()}
      <div className={helpClassName}>{errorMessage}</div>
    </>
  )

  return (
    <>
      <div className="form__input-group">
        <label className="form__input-label">{label}</label>
        <div className="form__input-password">{renderInput()}</div>
      </div>
    </>
  )
}

export default PasswordField
