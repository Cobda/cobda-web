import React, { ReactNode } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import LanguageDropdown from '../LanguageDropdown'
import { ComponentType } from '../../enum/component-type'
import { useSession, signOut } from 'next-auth/client'
import { useRouter } from 'next/router'

const NavbarHamburger = () => {
  const router = useRouter()
  const [session] = useSession()
  const { t } = useTranslation('common')
  const pathsWithoutSession: string[] = ['/products', '/about-us', '/product-registration', '/sign-in', '/sign-up']
  const pathsWithSession: string[] = ['/products', '/about-us', '/product-registration', '/account', '/']
  const menuItemsWithoutSession: string[] = ['product', 'aboutUs', 'sell', 'signIn', 'signUp']
  const menuItemsWithSession: string[] = ['product', 'aboutUs', 'sell', 'account', 'signOut']
  const menuItems: string[] = session ? menuItemsWithSession : menuItemsWithoutSession
  const paths: string[] = session ? pathsWithSession : pathsWithoutSession

  const handleLinkClick = (path: string) => () => {
    if (path === '/') {
      signOut()
    } else if (path === '/account') {
      router.push({ pathname: `/account`, query: { id: session?.user.id as string } })
    } else {
      router.push(path)
    }
  }

  const renderHamburgerIcon = () => (
    <div className="hamburger__icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )

  const renderHamburgerMenu = () => {
    const hamburgerMenuitems: ReactNode = paths.map((path, index) => (
      <li className="hamburger__menu-item" key={index}>
        <a className="hamburger__link" onClick={handleLinkClick(path)}>
          {t(menuItems[index])}
        </a>
      </li>
    ))

    return <ul className="hamburger__menu">{hamburgerMenuitems}</ul>
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
