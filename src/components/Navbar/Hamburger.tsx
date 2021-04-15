import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const NavbarHamburger = () => {
  const paths: string[] = ['/products', '/about-us', '', '/sign-up']
  // TODO link to sign-in when done modal //
  const hamburgerMenuItems: string[] = ['product', 'aboutUs', 'signIn', 'signUp']
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
      <li className="hamburger__menu-item" key={index}>
        <Link href={path}>
          <a className="hamburger__link">{t(hamburgerMenuItems[index])}</a>
        </Link>
      </li>
    ))

  return (
    <div className="hamburger">
      <div className="hamburger__container">
        <input className="hamburger__input" type="checkbox" />
        {renderHamburgerIcon()}
        <ul className="hamburger__menu">{renderHamburgerMenu()}</ul>
      </div>
    </div>
  )
}

export default NavbarHamburger
