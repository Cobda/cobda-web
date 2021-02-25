import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import LanguageItem from '../LanguageItem'
import { ComponentType } from '../Footer'

export enum LocaleCode {
  English = 'EN',
  Thai = 'TH'
}

interface LanguageDropdown {
  readonly componentType: ComponentType
}

const LanguageDropdown = ({ componentType }: LanguageDropdown) => {
  const router = useRouter()
  const { locales, locale } = router
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [selectedLocale, setSelectedLocale] = useState<string>(locale?.toLocaleUpperCase() || LocaleCode.English)
  const flagRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [])

  const handleDropdownToggle = () => setMenuOpen((prevState) => !prevState)

  const handleMouseClick = (event: MouseEvent) => {
    const isFocused: boolean | undefined = flagRef.current?.contains(
      event.target as Node
    )

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
      <Image src="/icons/united-states.svg" height={imageSize} width={imageSize} />
    )
  }

  const renderSelectedLocale = () => (
    <>
      <Image src="/icons/world.svg" height={16} width={16} />
      <span className="dropdown__label dropdown__label--bold">
        {selectedLocale.toLocaleUpperCase()}
      </span>
    </>
  )

  const renderLocaleDropdown = () => {
    const arrowClassName: string =
      componentType === ComponentType.Header
        ? 'dropdown__arrow'
        : 'dropdown__arrow dropdown__arrow--large'

    return (
      <div className="dropdown" onClick={handleDropdownToggle}>
        {componentType === ComponentType.Header
          ? renderSelectedFlagImage()
          : renderSelectedLocale()}
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

  const renderDropdownContainer = () => {
    return locales ? (
      <div className="dropdown-container" ref={flagRef}>
        {renderLocaleDropdown()}
        {renderLocaleMenu()}
      </div>
    ) : (
      <></>
    )
  }

  return renderDropdownContainer()
}

export default LanguageDropdown
