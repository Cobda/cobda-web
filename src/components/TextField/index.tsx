import React from 'react'

interface TextField {
  readonly name: string
  readonly label: string
  readonly placeholder: string
  readonly inputType: string
  readonly errorInput: string
}

const TextField = ({ label, placeholder, inputType, errorInput }: TextField) => {
  const renderValidInput = () => (
    <input className="form__input" type={inputType} placeholder={placeholder} />
  )

  const renderInvalidInput = () => (
    <>
      <input className="form__input form__input--invalid" type={inputType} />
      <div className="form__error">{errorInput}</div>
    </>
  )

  return (
    <div className="form__group">
      <label className="form__input-label">{label}</label>
        {errorInput ? renderValidInput() : renderInvalidInput()}
    </div>
  )
}

export default TextField
