import React from 'react'
import { useRouter } from 'next/router'

const NavbarLanguage = () => {
  const router = useRouter()

  const handleLocaleClick = (locale: string) => {
    if (router.locale !== locale) {
      const currentPath: string = router.pathname
      router.push(currentPath, currentPath, { locale })
    }
  }

  const renderLocaleLink = () => {
    return router.locales?.map((locale: string, index: number) => {
      return (
        <a
          key={index}
          className="navbar__link navbar__link--locale"
          onClick={() => handleLocaleClick(locale)}>
          {/* TODO: Please change according to the design */}
          {locale.toLocaleUpperCase()}
        </a>
      )
    })
  }

  return <div className="navbar__flag">{renderLocaleLink()}</div>
}

export default NavbarLanguage
