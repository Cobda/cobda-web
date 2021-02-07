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
        Don't have an account?
        <Link href="/sign-up">
          <a className="sign-in-form__link">
            Create here
          </a>
        </Link>
      </footer>
    </section>
  )
}

export default SignInForm
