import React from 'react'

interface CarouselItem {
  readonly caption: string
}

const CarouselItem = ({ caption }: CarouselItem) => {
  return (
    <div className="carousel-item">
      {caption}
    </div>
  )
}

export default CarouselItem
