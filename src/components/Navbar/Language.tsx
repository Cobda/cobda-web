import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const NavbarLanguage = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedLocale, setSelectedLocale] = useState<String>('th')
  const router = useRouter()

  const handleLocaleClick = (locale: string) => {
    const { pathname, asPath } = router
    setSelectedLocale(locale)
    router.push(pathname, asPath, { locale })
  }

  const handleArrowClick = () => {
    setOpen(!open)
  }

  const renderNavbarFlag = () => {
    const flagTH = <Image src="/icons/thailand.svg" height={16} width={16} />
    const flagEN = (
      <Image src="/icons/united-kingdom.svg" height={16} width={16} />
    )
    const localeItems = router.locales?.map((locale: string, index: number) => (
      <li
        className="dd-list-item"
        key={index}
        onClick={() => handleLocaleClick(locale)}>
        {locale === 'th' ? flagTH : flagEN}
        <span key={index} className="navbar__link navbar__link--locale">
          {locale.toLocaleUpperCase()}
        </span>
      </li>
    ))

    return localeItems ? (
      <div className="navbar__flag">
        {selectedLocale === 'th' ? (
          <Image src="/icons/thailand.svg" height={32} width={32} />
        ) : (
          <Image src="/icons/united-kingdom.svg" height={32} width={32} />
        )}
        <button onClick={handleArrowClick}></button>
        {open && <ul className="dd-list">{localeItems}</ul>}
      </div>
    ) : (
      <></>
    )
  }

  return renderNavbarFlag()
}

export default NavbarLanguage
