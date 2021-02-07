import React from 'react'
import Form from './Form'

const SignInForm = () => {
  return (
    <section className="sign-in-form">
      <header className="sign-in-form__header">Sign In</header>
      <div className="sign-in-form__body">
        <Form />
      </div>
      <footer className="sign-in-form__footer">
        Don't have an account? Create here
      </footer>
    </section>
  )
}

export default SignInForm
