import React, { ReactNode } from 'react'

interface CarouselItem {
  readonly profileCard: ReactNode
  readonly quoteBox: ReactNode
}

const CarouselItem = ({ profileCard, quoteBox }: CarouselItem) => {
  return (
    <div className="carousel-item carousel-item--quote">
      {profileCard}
      {quoteBox}
    </div>
  )
}

export default CarouselItem
