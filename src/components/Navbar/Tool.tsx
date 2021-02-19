import React from 'react'
import NavbarAccount from './Account'
import NavbarLanguage from './Language'

const NavbarTool = () => {
  return (
    <div className="navbar__tool">
      <NavbarAccount isUserSignedIn={false} />
      <NavbarLanguage />
    </div>
  )
}

export default NavbarTool
