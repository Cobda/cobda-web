import React from 'react'
import Image from 'next/image'

interface LanguageItem {
  readonly locale: string
  readonly isSelected: boolean
  readonly handleItemClick: () => void
}

interface Country {
  readonly [name: string]: string
}

const COUNTRY: Country = {
  en: 'English',
  th: 'ภาษาไทย',
}

const LanguageItem = ({ locale, isSelected, handleItemClick }: LanguageItem) => {
  
  const renderFlagImage = () => {
    const imageSize: number = 16
    
    return locale === 'th' ? (
      <Image src="/icons/thailand.svg" height={imageSize} width={imageSize} />
    ) : (
      <Image src="/icons/united-kingdom.svg" height={imageSize} width={imageSize} />
    )
  }

  const renderLocaleItem = () => {
    const countryName = COUNTRY[locale]

    return (
      <li
        className={
          isSelected
            ? 'dropdown__menu-item dropdown__menu-item--selected'
            : 'dropdown__menu-item'
        }
        onClick={handleItemClick}>
        {renderFlagImage()}
        <span className="dropdown__label">{countryName}</span>
      </li>
    )
  }

  return renderLocaleItem()
}

export default LanguageItem
