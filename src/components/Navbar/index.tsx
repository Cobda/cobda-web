import React from 'react'
import NavbarLogo from '../Logo'
import NavbarMenu from './Menu'
import NavbarTool from './Tool'
import NavbarHamburger from './Hamburger'

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavbarHamburger />
        <NavbarLogo />
        <NavbarMenu />
        <NavbarTool />
    </nav>
  )
}
export default Navbar
