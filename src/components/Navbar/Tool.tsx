import React from 'react'
import NavbarAccount from './Account'
import NavbarLanguage from './Language'

const NavbarTool = () => {
  return (
    <div className="navbar__tool">
      <NavbarAccount isUserSignedIn={true} />
      <NavbarLanguage />
    </div>
  )
}

export default NavbarTool
