import React from 'react'
import Link from 'next/link'

const NavbarMenu = () => {
  return (
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
  )
}

export default NavbarMenu
