import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Hamburger = () => {
  const paths = ['/products', '/about-us', '/sign-in', '/']
  // TODO link to sign up page when done modal //
  const HamburgerMenuItems = ['product', 'aboutUs', 'signIn', 'signUp']
  const { t } = useTranslation('common')

  const renderHamburgerIcon = () => (
    <>
      <span></span>
      <span></span>
      <span></span>
    </>
  )

  const renderHamburgerMenu = () =>
    paths.map((path, index) => (
      <li className="hamburger__menu-list">
        <Link href={path}>
          <a className="hamburger__menu-link">{t(HamburgerMenuItems[index])}</a>
        </Link>
      </li>
    ))

  return (
    <div className="hamburger">
      <div className="hamburger__container">
        <input type="checkbox" className="hamburger__input" />
        {renderHamburgerIcon()}
        <ul className="hamburger__menu">{renderHamburgerMenu()}</ul>
      </div>
    </div>
  )
}

export default Hamburger
