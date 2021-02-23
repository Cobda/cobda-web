import React from 'react'
import Link from 'next/link'
import NavbarLogo from '../Navbar/Logo'
import NavbarLanguage from '../Navbar/Language'

const Footer = () => (
  <div className="footer">
    <div className="footer__logo-container">
      <NavbarLogo />
      <NavbarLanguage />
    </div>
    <ul className="footer__list">
      <li className="footer__list-item">
        <h3 className="footer__list-title">Help Center</h3>
      </li>
      <li className="footer__list-item">
        {/* TODO: Redirect when path is available */}
        <Link href="#">
          <a className="footer__link">Terms of Service</a>
        </Link>
      </li>
      <li className="footer__list-item">
        {/* TODO: Redirect when path is available */}
        <Link href="#">
          <a className="footer__link">Privacy Policy</a>
        </Link>
      </li>
      <li className="footer__list-item">
        {/* TODO: Redirect when path is available */}
        <Link href="#">
          <a className="footer__link footer__link--danger">Emergency Line</a>
        </Link>
      </li>
    </ul>
    <ul className="footer__list">
      <li className="footer__list-item">
        <h3 className="footer__list-title">About</h3>
      </li>
      <li className="footer__list-item">
        <Link href="/about-us">
          <a className="footer__link">About Us</a>
        </Link>
      </li>
    </ul>
    <ul className="footer__list">
      <li className="footer__list-item">
        <h3 className="footer__list-title">Contact Us</h3>
      </li>
      <li className="footer__list-item">
        {/* Email Icon */}
        {/* TODO: Redirect when path is available */}
        <Link href="/">
          <a className="footer__link">support@cobda.com</a>
        </Link>
      </li>
    </ul>
  </div>
)

export default Footer
