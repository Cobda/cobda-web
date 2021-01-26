import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">COBDA</h2>
      <Link to="/sign-up" className="navbar__item">
        Sign Up
      </Link>
    </nav>
  );
}
