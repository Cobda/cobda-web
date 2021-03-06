import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LanguageItem from '../LanguageItem'
import { ComponentType } from '../../enum/component-type'

export enum LocaleCode {
  English = 'EN',
  Thai = 'TH'
}

interface LanguageDropdown {
  readonly parent: ComponentType
}

const LanguageDropdown = ({ parent }: LanguageDropdown) => {
  const router = useRouter()
  const { locales, locale } = router
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [selectedLocale, setSelectedLocale] = useState<string>(locale?.toLocaleUpperCase() || LocaleCode.English)
  const flagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      const isFocused: boolean | undefined = flagRef.current?.contains(event.target as Node)

      if (!isFocused) {
        setMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [])

  const handleDropdownToggle = () => setMenuOpen((prevState) => !prevState)

  const handleItemClick = (locale: string) => {
    const { pathname, asPath } = router
    handleDropdownToggle()
    setSelectedLocale(locale.toLocaleUpperCase())
    router.push(pathname, asPath, { locale })
  }

  const renderSelectedFlagImage = () => {
    const imageSize: number = 32

    return selectedLocale === LocaleCode.Thai ? (
      <Image src="/icons/thailand.svg" alt="Thailand Flag Icon" height={imageSize} width={imageSize} />
    ) : (
      <Image src="/icons/united-states.svg" alt="United States Flag Icon" height={imageSize} width={imageSize} />
    )
  }

  const renderSelectedLocale = () => (
    <>
      <Image src="/icons/world.svg" alt="World Icon" height={16} width={16} />
      <span className="dropdown__label dropdown__label--bold">{selectedLocale.toLocaleUpperCase()}</span>
    </>
  )

  const renderDropdownToggle = () => {
    const arrowClassName: string =
      parent === ComponentType.Header ? 'dropdown__arrow' : 'dropdown__arrow dropdown__arrow--large'

    return (
      <div className="dropdown__toggle" onClick={handleDropdownToggle}>
        {parent === ComponentType.Header ? renderSelectedFlagImage() : renderSelectedLocale()}
        <div className={arrowClassName} />
      </div>
    )
  }

  const renderLocaleMenu = () => {
    const localeMenu = locales?.map((currentLocale: string, index: number) => (
      <LanguageItem
        key={index}
        locale={currentLocale.toLocaleUpperCase()}
        isSelected={selectedLocale === currentLocale.toLocaleUpperCase()}
        handleItemClick={() => handleItemClick(currentLocale)}
      />
    ))

    return isMenuOpen ? <ul className="dropdown__menu">{localeMenu}</ul> : <></>
  }

  const renderLanguageDropdown = () => {
    return locales ? (
      <div className="dropdown" ref={flagRef}>
        {renderDropdownToggle()}
        {renderLocaleMenu()}
      </div>
    ) : (
      <></>
    )
  }

  return renderLanguageDropdown()
}

export default LanguageDropdown
