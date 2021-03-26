import React from 'react'

interface TextField {
  readonly name: string
  readonly label: string
  readonly inputType: string
  readonly inputValue: string
  readonly placeholder: string
  readonly errorMessage: string
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({ name, label, placeholder, inputType, inputValue, errorMessage, onChange }: TextField) => {
  const renderInput = (errorMessage: string) => {
    const inputClassName: string = errorMessage
      ? 'form__input form__input--invalid'
      : 'form__input'

    const renderErrorMessage = (errorMessage: string) =>
      errorMessage ? <span className="form__help">{errorMessage}</span> : <></>

    return (
      <>
        <input
          className={inputClassName}
          name={name}
          type={inputType}
          value={inputValue}
          placeholder={placeholder}
          onChange={onChange}
        />
        {renderErrorMessage(errorMessage)}
      </>
    )
  }

  return (
    <div className="form__input-group">
      <label className="form__input-label">{label}</label>
      {renderInput(errorMessage)}
    </div>
  )
}

export default TextField
