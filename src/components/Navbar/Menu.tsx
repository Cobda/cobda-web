import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavbarMenu = () => {
  const router = useRouter()
  const currentPath = router.pathname
  const paths = ['/', '/products', '/about-us']
  const pathNames = ['Home', 'Products', 'About us']

  const isSelectedItem = (isSelected: boolean) =>
    isSelected
      ? 'navbar__link navbar__link-item--selected'
      : 'navbar__link navbar__link-item'

  const menuItems = paths.map((path, index) => (
    <Link href={path} key={index}>
      <a className={isSelectedItem(path === currentPath)}>{pathNames[index]}</a>
    </Link>
  ))

  return <ul className="navbar__menu">{menuItems}</ul>
}

export default NavbarMenu
