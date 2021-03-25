import React from 'react'
import NavbarLogo from '../Logo'
import NavbarMenu from './Menu'
import NavbarTool from './Tool'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Hamburger />
        <NavbarLogo />
        <NavbarMenu />
        <NavbarTool />
      </div>
    </nav>
  )
}
export default Navbar
