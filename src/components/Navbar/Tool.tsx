import React from 'react'
import NavbarAccount from './Account'
import LanguageDropdown from '../LanguageDropdown'
import { ComponentType } from '../Footer'

const NavbarTool = () => {
  return (
    <div className="navbar__tool">
      <NavbarAccount isUserSignedIn={false} />
      <LanguageDropdown componentType={ComponentType.Header}/>
    </div>
  )
}

export default NavbarTool
