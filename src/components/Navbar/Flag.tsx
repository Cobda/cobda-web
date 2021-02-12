import React from 'react'
import { useRouter } from 'next/router'

const NavbarFlag = () => {
  const router = useRouter()

  const handleLocaleClick = (locale: string) => {
    if (router.locale !== locale) {
      const currentPath: string = router.pathname
      router.push(currentPath, currentPath, { locale })
    }
  }

  const renderFlags = () => {
    return router.locales?.map((locale, index) => {
      return (
        <a
          key={index}
          className="navbar__link navbar__link--locale"
          onClick={() => handleLocaleClick(locale)}>
          {locale}
        </a>
      )
    })
  }

  return <div className="navbar__flag">{renderFlags()}</div>
}

export default NavbarFlag
