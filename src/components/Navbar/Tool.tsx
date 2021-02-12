import React from 'react'
import NavbarAccount from './Account'
import NavbarFlag from './Flag'

const NavbarTool = () => {
  return (
    <div className="navbar__tool">
      <NavbarAccount isUserSignedIn={true} />
      <NavbarFlag />
    </div>
  )
}

export default NavbarTool
