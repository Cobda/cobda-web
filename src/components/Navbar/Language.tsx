import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LocaleItem from '../LocaleItem'

const NavbarLanguage = () => {
  const [isListOpen, setListOpen] = useState<boolean>(false)
  const [selectedLocale, setSelectedLocale] = useState<String>('th')
  const router = useRouter()

  const handleItemClick = (locale: string) => {
    const { pathname, asPath } = router
    handleDropdownToggle()
    setSelectedLocale(locale)
    router.push(pathname, asPath, { locale })
  }

  const handleDropdownToggle = () => {
    setListOpen((prevState) => !prevState)
  }

  const renderSelectedFlag = () => {
    return selectedLocale === 'th' ? (
      <Image src="/icons/thailand.svg" height={32} width={32} />
    ) : (
      <Image src="/icons/united-kingdom.svg" height={32} width={32} />
    )
  }

  const renderLocaleDropdown = () => {
    return (
      <div className="dropdown" onClick={handleDropdownToggle}>
        {renderSelectedFlag()}
        <div className="dropdown__arrow"></div>
      </div>
    )
  }

  const renderLocaleList = () => {
    const localeList = router.locales?.map((currentLocale: string, index: number) => (
      <LocaleItem
        key={index}
        locale={currentLocale}
        isSelected={selectedLocale === currentLocale}
        handleItemClick={() => handleItemClick(currentLocale)}
      />
    ))

    return isListOpen ? <ul className="dropdown__list">{localeList}</ul> : <></>
  }

  const renderNavbarLocale = () => {
    return router.locale ? (
      <div className="navbar__flag">
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
