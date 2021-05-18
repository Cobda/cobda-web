import React from 'react'
import NavbarLogo from '../Logo'
import NavbarMenu from './Menu'
import NavbarTool from './Tool'
import NavbarHamburger from './Hamburger'
import LanguageDropdown from '../LanguageDropdown'
import { ComponentType } from '../../enum/component-type'

const Navbar = () => {
  return (
    <nav className="navbar">
        <NavbarHamburger />
        <NavbarLogo />
        <NavbarMenu />
        <NavbarTool />
        {/* <LanguageDropdown parent={ComponentType.Footer} /> */}
    </nav>
  )
}
export default Navbar
