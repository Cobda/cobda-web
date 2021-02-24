import React from 'react'
import NavbarAccount from './Account'
import LanguageDropdown from '../LanguageDropdown'

const NavbarTool = () => {
  return (
    <div className="navbar__tool">
      <NavbarAccount isUserSignedIn={false} />
      <LanguageDropdown isHeading={true}/>
    </div>
  )
}

export default NavbarTool
