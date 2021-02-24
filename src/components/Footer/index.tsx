import React from 'react'
import Link from 'next/link'
import NavbarLogo from '../Navbar/Logo'
import NavbarLanguage from '../Navbar/Language'
import FooterItem from './item'

const Footer = () => {
  const renderLogoColumn = () => (
    <div className="footer__logo-container">
      <NavbarLogo />
      <NavbarLanguage />
    </div>
  )

  const renderHelpColumn = () => (
    <ul className="footer__list">
      <FooterItem isTitleText href="" label="Help Center" />
      {/* TODO: Redirect when path is available */}
      <FooterItem href="" label="Terms of Service" />
      {/* TODO: Redirect when path is available */}
      <FooterItem href="" label="Privacy Policy" />
      {/* TODO: Redirect when path is available */}
      <FooterItem isEmergencyText href="" label="Emergency Line" />
    </ul>
  )

  const renderAboutColumn = () => (
    <ul className="footer__list">
      <FooterItem isTitleText href="/about-us" label="About" />
      <FooterItem href="/about-us" label="About Us" />
    </ul>
  )

  const renderContactColumn = () => (
    <ul className="footer__list">
      <FooterItem isTitleText href="" label="Contact Us" />
      {/* Email Icon */}
      {/* TODO: Redirect when path is available */}
      <FooterItem href="" label="support@cobda.com" />
    </ul>
  )

  return (
    <div className="footer">
      {renderLogoColumn()}
      {renderHelpColumn()}
      {renderAboutColumn()}
      {renderContactColumn()}
    </div>
  )
}

export default Footer
