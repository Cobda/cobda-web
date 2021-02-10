import React from 'react'
import Link from 'next/link'
import Form from './Form'

const SignUpForm = () => {
  return (
    <section className="sign-up-form">
      <header className="sign-up-form__header">Register</header>
      <div className="sign-up-form__body">
        <Form />
      </div>
      <footer className="sign-up-form__footer">
        <div className="sign-up-form__footer-item">
          <p className="sign-up-form__description">Already have account?</p>
          <Link href="/sign-in">
            <a className="sign-up-form__link">Sign in</a>
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default SignUpForm
