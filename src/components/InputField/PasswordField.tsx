import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly name: string
  readonly label: string
  readonly inputValue: string
  readonly placeholder: string
  readonly errorMessage: string
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordField = ({ name, label, placeholder, errorMessage, inputValue, onChange }: PasswordField) => {
  const [isPasswordShown, setPasswordShown] = useState(false)

  const handlePasswordToggle = () => {
    setPasswordShown(!isPasswordShown)
  }

  const renderInput = () => {
    const placeholderText: string = errorMessage ? placeholder : ''
    const inputType: string = isPasswordShown ? 'text' : 'password'
    const inputClassName: string = errorMessage
      ? 'form__input'
      : 'form__input form__input--invalid'

    const renderErrorMessage = () =>
      !errorMessage ? <span className="form__help">{errorMessage}</span> : <></>

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

    return (
      <>
        <input
          className={inputClassName}
          name={name}
          type={inputType}
          value={inputValue}
          placeholder={placeholderText}
          onChange={onChange}
        />
        {renderErrorMessage()}
        {renderEyeIcon()}
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
