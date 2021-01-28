import React from 'react'

const SignUpSuccessForm = () => {
  return (
    <section className="sign-up-success-form">
      <div className="sign-up-success-form__image">Sample Picture</div>
      <header className="sign-up-success-form__header">
        <h2>Registration Success</h2>
      </header>
      <footer className="sign-up-success-form__footer">
        <div className="sign-up-success-form__actionable">
          <button className="sign-up-success-form__button">Continue</button>
        </div>
      </footer>
    </section>
  )
}

export default SignUpSuccessForm
