import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

export default function Form() {
  return (
    <div className="signUp-form">
      Sign up
      <Link to="/registration-success" className="btn btn-submit">
        Submit
      </Link>
    </div>
  );
}
