import React from 'react'

interface TextField {
  readonly name: string
  readonly label: string
  readonly inputType: string
  readonly placeholder: string
  readonly errorMessage: string
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  readonly inputRef: (ref: HTMLInputElement) => void
}

const TextField = ({ name, label, placeholder, inputType, errorMessage, onChange, inputRef }: TextField) => {
  const renderInput = () => {
    const inputClassName: string = errorMessage ? 'form__input form__input--invalid' : 'form__input'

    const renderErrorMessage = () => (errorMessage ? <div className="form__help">{errorMessage}</div> : <></>)

    return (
      <>
        <input
          className={inputClassName}
          name={name}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          ref={inputRef}
        />
        {renderErrorMessage()}
      </>
    )
  }

  return (
    <div className="form__input-group">
      <label className="form__label">{label}</label>
      {renderInput()}
    </div>
  )
}

export default TextField
