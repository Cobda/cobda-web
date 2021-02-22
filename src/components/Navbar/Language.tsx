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
    setSelectedLocale(locale)
    router.push(pathname, asPath, { locale })
  }

  const handleLocaleClick = () => {
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
      <div className="" onClick={handleLocaleClick}>
        {renderSelectedFlag()}
        <div className=""></div>
      </div>
    )
  }

  const renderLocaleList = () => {
    const localeList = router.locales?.map((locale: string, index: number) => (
      <LocaleItem
        key={index}
        locale={locale}
        handleItemClick={() => handleItemClick(locale)}
      />
    ))

    return isListOpen ? <ul className="">{localeList}</ul> : <></>
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
