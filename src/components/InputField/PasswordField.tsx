import React, { useState } from 'react'
import Image from 'next/image'

interface PasswordField {
  readonly name: string
  readonly label: string
  readonly placeholder: string
  readonly errorMessage?: string
  readonly expanded?: boolean
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  readonly inputRef?: (ref: HTMLInputElement) => void
  [props: string]: any
}

const PasswordField = ({ name, label, placeholder, errorMessage, expanded, onChange, inputRef, ...props }: PasswordField) => {
  const [isPasswordShown, setPasswordShown] = useState(false)

  const groupClassName = expanded ? 'form__input-group form__input-group--expanded' : 'form__input-group'

  const handlePasswordToggle = () => {
    setPasswordShown(!isPasswordShown)
  }

  const renderInput = () => {
    const inputType: string = isPasswordShown ? 'text' : 'password'
    const inputClassName: string = errorMessage ? 'form__input form__input--invalid' : 'form__input'

    const renderErrorMessage = () => (errorMessage ? <div className="form__help">{errorMessage}</div> : <></>)

    const renderEyeIcon = () => {
      const imageSelected: string = isPasswordShown ? '/icons/visible-eye-icon.svg' : '/icons/invisible-eye-icon.svg'

      return (
        <div className="form__icon-eye" onClick={handlePasswordToggle}>
          <Image src={imageSelected} alt="Password Eye Icon" height={17} width={21} />
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
          {...props}
        />
        {renderErrorMessage()}
        {renderEyeIcon()}
      </div>
    )
  }

  return (
    <div className={groupClassName}>
      <label className="form__label">{label}</label>
      {renderInput()}
    </div>
  )
}

export default PasswordField
