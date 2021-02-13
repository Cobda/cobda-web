import React from 'react'
import NavbarLogo from './Logo'
import NavbarMenu from './Menu'
import NavbarTool from './Tool'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarLogo />
      <NavbarMenu />
      <NavbarTool />
    </nav>
  )
}

export default Navbar
