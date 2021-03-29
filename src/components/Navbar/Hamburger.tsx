import React from 'react'
import Link from 'next/link'

const Hamburger = () => {
  return (
    <div className="hamburger">
      <div className="hamburger__container">
        <input type="checkbox" className="hamburger__input" />
        <span></span>
        <span></span>
        <span></span>
        <ul className="hamburger__menu">
          <li className="hamburger__menu-list">
            <Link href="/products">
              <a className="hamburger__menu-link">Products</a>
            </Link>
          </li>
          <li className="hamburger__menu-list">
            <Link href="/about-us">
              <a className="hamburger__menu-link">About Us</a>
            </Link>
          </li>
          <li className="hamburger__menu-list">
            <Link href="/sign-in">
              <a className="hamburger__menu-link">Sign In</a>
            </Link>
          </li>
          <li className="hamburger__menu-list">
            {/* TODO link to sign up page when done modal */}
            <Link href="">
              <a className="hamburger__menu-link">Sign Up</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Hamburger
