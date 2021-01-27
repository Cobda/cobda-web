import React from 'react';
import Link from 'next/link'

export default function SignUpForm() {
  return (
    <div className="sign-up-form">
      Sign up
      <Link href="/registration-success">
        <a className="sign-up-form__submit-button">
          Submit
        </a>
      </Link>
    </div>
  )
}
