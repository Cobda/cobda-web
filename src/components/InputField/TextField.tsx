import React from 'react'

interface TextField {
  readonly name: string
  readonly label: string
  readonly inputType: string
  readonly placeholder: string
  readonly errorMessage?: string
  readonly expanded?: boolean
  readonly onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  readonly inputRef?: (ref: HTMLInputElement) => void
  [props: string]: any
}

const TextField = ({ name, label, placeholder, inputType, errorMessage, expanded, onChange, inputRef, ...props }: TextField) => {
  const groupClassName = expanded ? 'form__input-group form__input-group--expanded' : 'form__input-group'
  
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
          {...props}
        />
        {renderErrorMessage()}
      </>
    )
  }

  return (
    <div className={groupClassName}>
      <label className="form__label">{label}</label>
      {renderInput()}
    </div>
  )
}

export default TextField
