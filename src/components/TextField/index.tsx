import React from 'react'

interface CommonField {
  readonly label: String
  readonly inputType: any
  readonly isValid?: boolean
  readonly errorInput: String
}

const CommonField = ({ label, inputType, isValid, errorInput }: CommonField) => {
  const handleValid = () => (
    <div className="form__input-group">
      <input
        placeholder="Enter your first name"
        type={inputType}
        className="form__input"
      />
    </div>
  )

  const handleInvalid = () => (
    <>
      <div className="form__input-group">
        <input type={inputType} className="form__input form__input--invalid" />
      </div>
      <div className="form__error">{errorInput}</div>
    </>
  )

  return (
    <div className="form__group">
      <label className="form__input-label">{label}</label>
      {isValid ? handleValid() : handleInvalid()}
    </div>
  )
}

export default CommonField
