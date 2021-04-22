import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const NavbarHamburger = () => {
  const paths: string[] = ['/products', '/about-us', '/product-registration', '/sign-in', '/sign-up']
  const hamburgerMenuItems: string[] = ['product', 'aboutUs', 'sell', 'signIn', 'signUp']
  const { t } = useTranslation('common')

  const renderHamburgerIcon = () => (
    <div className="hamburger__icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
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
      <input className="hamburger__input" type="checkbox" />
      {renderHamburgerIcon()}
      <ul className="hamburger__menu">{renderHamburgerMenu()}</ul>
    </div>
  )
}

export default NavbarHamburger
