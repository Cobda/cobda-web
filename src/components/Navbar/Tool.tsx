import React from 'react'
import NavbarAccount from './Account'
import LanguageDropdown from '../LanguageDropdown'
import { ComponentType } from '../../enum/component-type'

const NavbarTool = () => {
  return (
    <div className="navbar__tool">
      <NavbarAccount isUserSignedIn={false} />
      <LanguageDropdown parent={ComponentType.Header}/>
    </div>
  )
}

export default NavbarTool
