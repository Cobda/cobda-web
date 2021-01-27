import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">COBDA</h2>
      <Link href="/sign-up">
        <a className="navbar__item">
          Sign Up
        </a>
      </Link>
    </nav>
  )
}
