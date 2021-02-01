import React from 'react'
import NavbarLogo from '../NavbarLogo'
import NavbarMenu from '../NavbarMenu'
import NavbarAccount from '../NavbarAccount'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarLogo />
      <NavbarMenu />
      <NavbarAccount isUserExist={true} />
    </nav>
  )
}

export default Navbar
