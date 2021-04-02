import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly name: string
  readonly label: string
  readonly placeholder: string
  readonly errorMessage: string
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  readonly inputRef: (ref: HTMLInputElement) => void
}

const PasswordField = ({ name, label, placeholder, errorMessage, onChange, inputRef }: PasswordField) => {
  const [isPasswordShown, setPasswordShown] = useState(false)

  const handlePasswordToggle = () => {
    setPasswordShown(!isPasswordShown)
  }

  const renderInput = (errorMessage: string, isPasswordShown: boolean) => {
    const inputType: string = isPasswordShown ? 'text' : 'password'
    const inputClassName: string = errorMessage ? 'form__input form__input--invalid' : 'form__input'

    const renderErrorMessage = (errorMessage: string) =>
      errorMessage ? <div className="form__help">{errorMessage}</div> : <></>

    const renderEyeIcon = (isPasswordShown: boolean) => {
      const imageSelected: string = isPasswordShown ? '/icons/visible-eye-icon.svg' : '/icons/invisible-eye-icon.svg'

      return (
        <div className="form__icon-eye" onClick={handlePasswordToggle}>
          <Image src={imageSelected} height={17} width={21} />
        </div>
      )
    }

    return (
      <div className="form__input-password">
        <input
          className={inputClassName}
          name={name}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          ref={inputRef}
        />
        {renderErrorMessage(errorMessage)}
        {renderEyeIcon(isPasswordShown)}
      </div>
    )
  }

  return (
    <div className="form__input-group">
      <label className="form__input-label">{label}</label>
      {renderInput(errorMessage, isPasswordShown)}
    </div>
  )
}

export default PasswordField
