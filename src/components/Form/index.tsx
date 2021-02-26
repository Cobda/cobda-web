import React from 'react'
import { useRouter } from 'next/router'

interface Form {
  title: string
  href: string
}

const Form = ({ title, href }: Form) => {
  const router = useRouter()

  const onSubmitButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    router.push(href)
  }

  return (
    <form action="" className="form">
      <header className="form__header">
        <h2 className="form__title">{title}</h2>
      </header>
      <div className="form__input-group">
        <label className="form__input-label">First Name</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Surname</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Username</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Email</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Password</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__input-group">
        <label className="form__input-label">Confirm Password</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__actionable">
        <button className="form__button" onClick={onSubmitButtonClick}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Form
