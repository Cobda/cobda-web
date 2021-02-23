import React from 'react'
import Image from 'next/image'
import { LocaleCode } from '../Navbar/Language'

interface LanguageItem {
  readonly locale: string
  readonly isSelected: boolean
  readonly handleItemClick: () => void
}

enum Language {
  EN = 'English',
  TH = 'ภาษาไทย',
}

const LanguageItem = ({ locale, isSelected, handleItemClick }: LanguageItem) => {
  
  const renderFlagImage = () => {
    const imageSize: number = 16

    return locale === LocaleCode.Thai ? (
      <Image src="/icons/thailand.svg" height={imageSize} width={imageSize} />
    ) : (
      <Image src="/icons/united-kingdom.svg" height={imageSize} width={imageSize} />
    )
  }

  const renderLocaleItem = () => {
    const languageName: string = locale === LocaleCode.Thai ? Language.TH : Language.EN
    const itemClassName: string = isSelected
      ? 'dropdown__menu-item dropdown__menu-item--selected'
      : 'dropdown__menu-item'
      
    return (
      <li className={itemClassName} onClick={handleItemClick}>
        {renderFlagImage()}
        <span className="dropdown__label">{languageName}</span>
      </li>
    )
  }

  return renderLocaleItem()
}

export default LanguageItem
