import React from 'react'
interface QuoteBox {
  readonly quote: string
}

const QuoteBox = ({ quote }: QuoteBox) => {
  return (
    <div className="quote-box">
      <header className="quote-box__header">
        <h3 className="quote-box__title">QUOTES</h3>
      </header>
      <div className="quote-box__container quote-box__container--background-image">
        <p className="quote-box__content">{quote}</p>
      </div>
    </div>
  )
}

export default QuoteBox
