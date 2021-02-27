import React from 'react'
import Logo from '../Logo'
import NavbarMenu from './Menu'
import NavbarTool from './Tool'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <NavbarMenu />
      <NavbarTool />
    </nav>
  )
}

export default Navbar
