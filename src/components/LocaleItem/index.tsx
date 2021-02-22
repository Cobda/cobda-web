import React from 'react'
import Image from 'next/image'

interface LocaleItem {
  locale: string
  isSelected: boolean
  handleItemClick: () => void
}

interface Country {
  [name: string]: string
}

const COUNTRY: Country = {
  en: 'English',
  th: 'ภาษาไทย',
}

const LocaleItem = ({ locale, isSelected, handleItemClick }: LocaleItem) => {
  const renderFlagImage = () => {
    return locale === 'th' ? (
      <Image src="/icons/thailand.svg" height={16} width={16} />
    ) : (
      <Image src="/icons/united-kingdom.svg" height={16} width={16} />
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

export default LocaleItem
