import React from 'react'
import { useRouter } from 'next/router'

const NavbarLanguage = () => {
  const router = useRouter()

  const handleLocaleClick = (locale: string) => {
    const { pathname, asPath } = router
    router.push(pathname, asPath, { locale })
  }

  const renderNavbarFlag = () => {
    const localeLinks = router.locales?.map((locale: string, index: number) => (
      <a
        key={index}
        className="navbar__link navbar__link--locale"
        onClick={() => handleLocaleClick(locale)}>
        {/* TODO: Please change according to the design */}
        {locale.toLocaleUpperCase()}
      </a>
    ))
    
    return localeLinks ? (
      <div className="navbar__flag">{localeLinks}</div>
    ) : (
      <></>
    )
  }

  return renderNavbarFlag()
}

export default NavbarLanguage
