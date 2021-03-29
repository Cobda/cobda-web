import React from 'react'

interface TextField {
  readonly name: string
  readonly label: string
  readonly inputType: string
  readonly inputValue: string
  readonly placeholder: string
  readonly errorMessage: string | undefined
  // Add type
  readonly reference?: any
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = ({ name, label, placeholder, inputType, inputValue, errorMessage, reference, onChange }: TextField) => {
  const renderInput = (errorMessage: string | undefined) => {
    const inputClassName: string = errorMessage
      ? 'form__input form__input--invalid'
      : 'form__input'

    const renderErrorMessage = (errorMessage: string | undefined) =>
      errorMessage ? <div className="form__help">{errorMessage}</div> : <></>

    return (
      <>
        <input
          className={inputClassName}
          name={name}
          type={inputType}
          value={inputValue}
          placeholder={placeholder}
          ref={reference}
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
