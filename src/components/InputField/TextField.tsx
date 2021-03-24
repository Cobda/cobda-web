import React from 'react'

interface TextField {
  readonly name: string
  readonly label: string
  readonly placeholder: string
  readonly inputType: string
  readonly errorMessage: string
}

const TextField = ({ label, placeholder, inputType, errorMessage }: TextField) => {
  const renderInput = () => {
    const placeholderText: string = errorMessage ? placeholder : ''
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
        {renderErrorMessage()}
      </>
    )
  }

  return (
    <div className="form__input-group">
      <label className="form__input-label">{label}</label>
      {renderInput()}
    </div>
  )
}

export default TextField
