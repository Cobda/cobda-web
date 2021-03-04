import React from 'react'
import Link from 'next/link'
import NavbarAccount from './Account'
import { useRouter } from 'next/router'

const Hamburger = () => {
  const router = useRouter()

  const handleProductClick = () => {
    router.push('/products')
  }

  const handleAboutUsClick = () => {
    router.push('/about-us')
  }

  const handleSignInClick = () => {
    router.push('/sign-in')
  }

  const handleSignUpClick = () => {
    router.push('/sign-up')
  }

  return (
    <div className="hamburger">
      <input type="checkbox" className="hamburger__input" />
      <span></span>
      <span></span>
      <span></span>
      <ul className="hamburger__menu">
        <li className="hamburger__menu-list">
          <a onClick={handleProductClick}>Products</a>
        </li>
        <li className="hamburger__menu-list">
          <a onClick={handleAboutUsClick}>About Us</a>
        </li>
        <li className="hamburger__menu-list">
          <a onClick={handleSignInClick}>Sign In</a>
        </li>
        <li className="hamburger__menu-list">
          <a onClick={handleSignUpClick}>Sign Up</a>
        </li>
      </ul>
    </div>
  )
}

export default Hamburger
