import React from 'react'

interface TextField {
  readonly name: string
  readonly label: string
  readonly placeholder: string
  readonly inputType: string
  readonly errorMessage: string
}

const TextField = ({ label, placeholder, inputType, errorMessage }: TextField) => {
  const placeholderDisplay: string = errorMessage && placeholder
  const inputClassName: string = errorMessage
    ? 'form__input'
    : 'form__input form__input--invalid'


  const helpClassName: string = errorMessage
    ? 'form__help'
    : 'form__help form__help--visible'

  const renderInput = () => (
    <>
      <input
        className={inputClassName}
        type={inputType}
        placeholder={placeholderDisplay}
      />
      <div className={helpClassName}>{errorMessage}</div>
    </>
  )

  return (
    <div className="form__input-group">
      <label className="form__input-label">{label}</label>
      {renderInput()}
    </div>
  )
}

export default TextField
