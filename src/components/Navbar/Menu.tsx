import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

const NavbarMenu = () => {
  const router = useRouter()
  const { pathname } = router
  const paths = ['/', '/products', '/about-us']
  const pathNames = ['home', 'product', 'aboutUs']
  const { t } = useTranslation('common')

  const menuItems = (routerPath: string) =>
    paths.map((path, index) => {
      const linkClassName: string =
        path === routerPath
          ? 'navbar__menu-item navbar__menu-item--selected'
          : 'navbar__menu-item'

      return (
        <Link href={path} key={index}>
          <a className={linkClassName}>{t(pathNames[index])}</a>
        </Link>
      )
    })

  return pathname ? (
    <ul className="navbar__menu">{menuItems(pathname)}</ul>
  ) : (
    <></>
  )
}

export default NavbarMenu
