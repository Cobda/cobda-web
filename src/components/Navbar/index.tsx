import React from 'react'
import NavbarLogo from './Logo'
import NavbarMenu from './Menu'
import NavbarAccount from './Account'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarLogo />
      <NavbarMenu />
      <NavbarAccount isUserSignedIn={true} />
    </nav>
  )
}

export default Navbar
