import React from 'react'
import NavbarLogo from '../Logo'
import NavbarMenu from './Menu'
import NavbarTool from './Tool'
import Hamburger from './Hamburger'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__hamburger-container">
        <Hamburger />
      </div>
      <NavbarLogo />
      <NavbarMenu />
      <NavbarTool />
    </nav>
  )
}
export default Navbar
