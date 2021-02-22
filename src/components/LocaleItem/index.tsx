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

const country: Country = {
  th: 'Thailand',
  en: 'English',
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
    const countryName = country[locale]

    return (
      <li
        className={`dropdown__item ${isSelected && 'dropdown__item--selected'}`}
        onClick={handleItemClick}>
        {renderFlagImage()}
        <span className="dropdown__label">{countryName}</span>
      </li>
    )
  }

  return renderLocaleItem()
}

export default LocaleItem
