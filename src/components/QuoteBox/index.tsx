import React from 'react'
import useTranslation from 'next-translate/useTranslation'

interface QuoteBox {
  readonly quote: string
}

const QuoteBox = ({ quote }: QuoteBox) => {
  const { t } = useTranslation('about-us')

  return (
    <div className="quote-box">
      <header className="quote-box__header">
        <h3 className="quote-box__title">{t('quoteSectionHeader')}</h3>
      </header>
      <div className="quote-box__body quote-box__body--background-image">
        <p className="quote-box__content">{quote}</p>
      </div>
    </div>
  )
}

export default QuoteBox
