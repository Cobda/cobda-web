import React from 'react'

interface Textarea {
  readonly name: string
  readonly label: string
  readonly placeholder?: string
  readonly errorMessage?: string
  readonly onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  readonly textareaRef: (ref: HTMLTextAreaElement) => void
}

const Textarea = ({ name, label, placeholder, errorMessage, onChange, textareaRef }: Textarea) => {
  const renderTextarea = () => {
    const textareaClassName: string = errorMessage ? 'form__textarea form__textarea--invalid' : 'form__textarea'

    const renderErrorMessage = () => (errorMessage ? <div className="form__help">{errorMessage}</div> : <></>)

    return (
      <>
        <textarea
          className={textareaClassName}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          ref={textareaRef}
        />
        {renderErrorMessage()}
      </>
    )
  }

  return (
    <div className="form__input-group">
      <label className="form__label">{label}</label>
      {renderTextarea()}
    </div>
  )
}

export default Textarea
