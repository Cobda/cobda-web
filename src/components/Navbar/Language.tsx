import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LanguageItem from '../LanguageItem'

const NavbarLanguage = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [selectedLocale, setSelectedLocale] = useState<string>('en')
  const flagRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { locales } = router

  useEffect(() => {
    document.addEventListener('mousedown', handleDropdownToggle)

    return () => {
      document.removeEventListener('mousedown', handleDropdownToggle)
    }
  }, [])

  // TODO: find event
  const handleDropdownToggle = (event: any) => {
    setMenuOpen((prevState) => !prevState)
  }

  const handleItemClick = (locale: string) => {
    const { pathname, asPath } = router
    setSelectedLocale(locale)
    setMenuOpen((prevState) => !prevState)
    router.push(pathname, asPath, { locale })
  }

  const renderSelectedFlag = () => {
    const imageSize: number = 32

    return selectedLocale === 'th' ? (
      <Image src="/icons/thailand.svg" height={imageSize} width={imageSize} />
    ) : (
      <Image src="/icons/united-kingdom.svg" height={imageSize} width={imageSize} />
    )
  }

  const renderLocaleDropdown = () => {
    return (
      <div className="dropdown" onClick={handleDropdownToggle}>
        {renderSelectedFlag()}
        <span className="dropdown__arrow-down" />
      </div>
    )
  }

  const renderLocaleList = () => {
    const localeList = locales?.map(
      (currentLocale: string, index: number) => (
        <LanguageItem
          key={index}
          locale={currentLocale}
          isSelected={selectedLocale === currentLocale}
          handleItemClick={() => handleItemClick(currentLocale)}
        />
      )
    )

    return isMenuOpen ? <ul className="dropdown__menu">{localeList}</ul> : <></>
  }

  const renderNavbarLocale = () => {
    return locales ? (
      <div className="navbar__flag" ref={flagRef}>
        {renderLocaleDropdown()}
        {renderLocaleList()}
      </div>
    ) : (
      <></>
    )
  }

  return renderNavbarLocale()
}

export default NavbarLanguage
