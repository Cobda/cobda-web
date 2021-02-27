import React from 'react'
import ProfileCard from '../ProfileCard'
import QuoteBox from '../QuoteBox'

interface CarouselItem {
  readonly imagePath: string
  readonly alternate: string
  readonly name: string
  readonly role: string
  readonly quote: string
}

const CarouselItem = ({ imagePath, alternate, name, role, quote }: CarouselItem) => {
  return (
    <div className="carousel-item carousel-item--quote">
      <ProfileCard
        imagePath={imagePath}
        alternate={alternate}
        name={name}
        role={role}
      />
      <QuoteBox quote={quote} />
    </div>
  )
}

export default CarouselItem
