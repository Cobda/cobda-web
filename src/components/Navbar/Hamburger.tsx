import React, { ReactNode } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import LanguageDropdown from '../LanguageDropdown'
import { ComponentType } from '../../enum/component-type'
import { useSession, signOut } from 'next-auth/client'

const NavbarHamburger = () => {
  const { t } = useTranslation('common')
  const [session] = useSession()
  const paths: string[] = ['/products', '/about-us', '/product-registration', '/sign-in', '/sign-up']
  const pathsWithSession: string[] = ['/products', '/about-us', '/product-registration', '/sign-in']

  const hamburgerMenuItems: string[] = ['prodkuct', 'aboutUs', 'sell', 'signIn', 'signUp']
  const hamburgerMenuItemsWithSession: string[] = ['product', 'aboutUs', 'sell', 'signOut']

  const finalMenuItems: string[] = session ? hamburgerMenuItemsWithSession : hamburgerMenuItems
  const finalPaths: string[] = session ? pathsWithSession : paths

  const renderHamburgerIcon = () => (
    <div className="hamburger__icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  const renderHamburgerMenu = () => {
    const menuItems: ReactNode = finalPaths.map((path, index) => (
      <li className="hamburger__menu-item" key={index}>
        <Link href={path}>
          <a className="hamburger__link">{t(finalMenuItems[index])}</a>
        </Link>
      </li>
    ))

    return <ul className="hamburger__menu">{menuItems}</ul>
  }

  const renderLocales = () => (
    <div className="hamburger__locales">
      <LanguageDropdown parent={ComponentType.Footer} />
    </div>
  )

  return (
    <div className="hamburger">
      <input className="hamburger__input" type="checkbox" />
      {renderHamburgerIcon()}
      {renderHamburgerMenu()}
      {renderLocales()}
    </div>
  )
}

export default NavbarHamburger
