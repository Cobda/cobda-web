import React from 'react'

interface CarouselItem {
  readonly caption: string
}

const CarouselItem = ({ caption }: CarouselItem) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item__image-container"></div>
      <p className="carousel-item__caption">
        {caption}
      </p>
    </div>
  )
}

export default CarouselItem
