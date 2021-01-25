import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar">
      COBDA
      <Link to="/sign-up" className="nav-link">
        Sign Up
      </Link>
    </nav>
  );
}
