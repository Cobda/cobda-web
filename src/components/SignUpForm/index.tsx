import React from 'react';
import Link from 'next/link';

export default function SignUpForm() {
  return (
    <section className="sign-up-form">
      <header className="sign-up-form__header">Register</header>
      <div className="sign-up-form__body">
        <form action="" className="form">
          <header className="form__header">
            <h2 className="form__title">Personal Details</h2>
          </header>
          <body className="form__body">
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
          </body>
          <footer className="form__footer">
          <div className="form__actionable">
            <Link href="/registration-success">
              <button className="form__button">Submit</button>
            </Link>
          </div>
          </footer>
        </form>
      </div>
      <footer className="sign-up-form__footer">
        Already have account? Sign in
      </footer>
    </section>
  )
}
