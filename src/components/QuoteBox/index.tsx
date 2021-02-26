import React from 'react'

interface QuoteBox {
  readonly quote: string
}

const QuoteBox = ({ quote }: QuoteBox) => {
  return (
    <>
      <header className="quote-box__header">
        <h3 className="quote-box__title">QUOTES</h3>
      </header>
      {/* TODO */}
      <p>{quote}</p>
    </>
  )
}

export default QuoteBox
