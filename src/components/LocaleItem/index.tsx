import React from 'react'
import Image from 'next/image'

interface LocaleItem {
  locale: string
  handleItemClick: () => void
}

interface CountryName {
  [name: string]: string
}

const countryName: CountryName = {
  th: 'Thailand',
  en: 'English',
}

const LocaleItem = ({ locale, handleItemClick }: LocaleItem) => {
  
  const renderFlagImage = () => {
    return locale === 'th' ? (
      <Image src="/icons/thailand.svg" height={16} width={16} />
    ) : (
      <Image src="/icons/united-kingdom.svg" height={16} width={16} />
    )
  }

  const renderLocaleItem = () => {
    return (
      <li className="" onClick={handleItemClick}>
        {renderFlagImage()}
        <span className="">{countryName[locale]}</span>
      </li>
    )
  }

  return renderLocaleItem()
}

export default LocaleItem
