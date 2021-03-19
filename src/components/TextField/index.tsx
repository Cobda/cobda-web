import React from 'react'

interface CommonField {
  readonly label: String
  readonly inputType: any
  readonly isValid?: boolean
}

const CommonField = ({ label, inputType, isValid }: CommonField) => {
  const handleValid = () => (
    <>
      <input
        placeholder="Enter your first name"
        type={inputType}
        className="form__input"
      />
    </>
  )

  const handleInvalid = () => (
    <>
      <div className="form__input-group">
        <input type={inputType} className="form__input form__input--invalid" />
      </div>
      <div className="form__error">{handleErrorValidation(label)}</div>
    </>
  )

  const handleErrorValidation = (label: String) => {
    if (label == 'Username') {
      return 'Your username is being use.'
    } else if (label == 'Email') {
      return 'Email is incorrect.'
    } else {
      return 'Invalid input type.'
    }
  }

  return (
    <div className="form__group">
      <label className="form__input-label">{label}</label>
      {isValid ? handleValid() : handleInvalid()}
    </div>
  )
}

export default CommonField
