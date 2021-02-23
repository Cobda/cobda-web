import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LanguageItem from '../LanguageItem'

export enum LocaleCode {
  English = 'EN',
  Thai = 'TH'
}

const NavbarLanguage = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [selectedLocale, setSelectedLocale] = useState<string>(LocaleCode.English)
  const flagRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { locales } = router

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [])

  const handleDropdownToggle = () => setMenuOpen((prevState) => !prevState)

  const handleMouseClick = (event: MouseEvent) => {
    const isFocused: boolean | undefined = flagRef.current?.contains(event.target as Node)

    if (!isFocused) {
      setMenuOpen(false)
    }
  }

  const handleItemClick = (locale: string) => {
    const { pathname, asPath } = router
    handleDropdownToggle()
    setSelectedLocale(locale.toLocaleUpperCase())
    router.push(pathname, asPath, { locale })
  }

  const renderSelectedFlagImage = () => {
    const imageSize: number = 32

    return selectedLocale === LocaleCode.Thai ? (
      <Image src="/icons/thailand.svg" height={imageSize} width={imageSize} />
    ) : (
      <Image src="/icons/united-kingdom.svg" height={imageSize} width={imageSize} />
    )
  }

  const renderLocaleDropdown = () => {
    return (
      <div className="dropdown" onClick={handleDropdownToggle}>
        {renderSelectedFlagImage()}
        <div className="dropdown__arrow" />
      </div>
    )
  }

  const renderLocaleMenu = () => {
    const localeMenu = locales?.map((currentLocale: string, index: number) => (
      <LanguageItem
        key={index}
        locale={currentLocale.toLocaleUpperCase()}
        isSelected={selectedLocale === currentLocale}
        handleItemClick={() => handleItemClick(currentLocale)}
      />
    ))

    return isMenuOpen ? <ul className="dropdown__menu">{localeMenu}</ul> : <></>
  }

  const renderNavbarLocale = () => {
    return locales ? (
      <div className="navbar__flag" ref={flagRef}>
        {renderLocaleDropdown()}
        {renderLocaleMenu()}
      </div>
    ) : (
      <></>
    )
  }

  return renderNavbarLocale()
}

export default NavbarLanguage
