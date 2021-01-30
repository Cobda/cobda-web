import React from 'react'
import Form from '../Form'

const SignUpForm = () => {
  return (
    <section className="sign-up-form">
      <header className="sign-up-form__header">Register</header>
      <div className="sign-up-form__body">
        <Form title="Personal Detail" href="/sign-up-success" />
      </div>
      <footer className="sign-up-form__footer">
        Already have account? Sign in
      </footer>
    </section>
  )
}

export default SignUpForm
