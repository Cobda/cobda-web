import React from 'react'

interface CommonField {
  readonly label: string
  readonly inputType: any
  readonly isValueValid?: boolean
}

const CommonField = ({ label, inputType, isValueValid }: CommonField) => {
  const renderValidInput = () => (
    <div className="form__input-group">
      <input
        placeholder={`Enter your ${label}`}
        type={inputType}
        className="form__input"
      />
    </div>
  )

  const renderInvalidInput = () => (
    <>
      <div className="form__input-group">
        <input type={inputType} className="form__input form__input--invalid" />
      </div>
      <div className="form__error">sample</div>
    </>
  )

  return (
    <div className="form__group">
      <label className="form__input-label">{label}</label>
      {isValueValid ? renderValidInput() : renderInvalidInput()}
    </div>
  )
}

export default CommonField
