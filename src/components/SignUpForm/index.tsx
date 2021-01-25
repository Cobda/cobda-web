import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function SignUpForm() {
  return (
    <div className="sign-up-form">
      Sign up
      <Link to="/registration-success" className="sign-up-form__submit-button">
        Submit
      </Link>
    </div>
  );
}
