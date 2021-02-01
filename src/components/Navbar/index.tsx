import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface Navbar {
  isLogin?: boolean
}

const Navbar = ({ isLogin }: Navbar) => {
  const router = useRouter()

  const handleSignInClick = () => {
    // TODO: Open SignIn modal
  }

  const handleSignUpClick = () => {
    router.push('/sign-up')
  }

  const handleAvatarClick = () => {
    // TODO: Expand dropdown or sth
  }

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        {/* TODO: Navbar brand logo */}
        <span className="navbar__brand-name">COBDA</span>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu-item">
          <Link href="/">
            <a className="navbar__link">Home</a>
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link href="/product-list">
            <a className="navbar__link">Products</a>
          </Link>
        </li>
        <li className="navbar__menu-item">
          <Link href="/about-us">
            <a className="navbar__link">About Us</a>
          </Link>
        </li>
      </ul>
      <div className="navbar__authentication">
        {isLogin ? (
          <button
            className="navbar__avatar-button"
            onClick={handleAvatarClick}>
            <img src="#" alt="avatar" />
          </button>
        ) : (
          <>
            <button
              className="navbar__authentication-button"
              onClick={handleSignInClick}>
              Sign In
            </button>
            <button
              className="navbar__authentication-button"
              onClick={handleSignUpClick}>
              Sign Up
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
