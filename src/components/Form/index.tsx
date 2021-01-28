import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface Form {
  title: string
}

const Form = ({ title }: Form) => {
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
        <Link href="/sign-up-success">
          <button className="form__button">Submit</button>
        </Link>
      </div>
    </form>
  )
}

export default Form
