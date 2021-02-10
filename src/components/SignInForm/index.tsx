import React from 'react'
import Link from 'next/link'
import Form from './Form'

const SignInForm = () => {
  return (
    <section className="sign-in-form">
      <header className="sign-in-form__header">Sign In</header>
      <div className="sign-in-form__body">
        <Form />
      </div>
      <footer className="sign-in-form__footer">
        <div className="sign-in-form__footer-item">
          <p className="sign-in-form__description">Don't have an account?</p>
          <Link href="/sign-up">
            <a className="sign-in-form__link">Create an account</a>
          </Link>
        </div>
        <div className="sign-in-form__footer-item">
          <Link href="">
            <a>Forgot you password?</a>
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default SignInForm
