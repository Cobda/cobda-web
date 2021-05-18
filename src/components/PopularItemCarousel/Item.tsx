import React from 'react'

interface CarouselItem {
  readonly imagePath: string,
  readonly alternative: string,
  readonly caption: string
}

const CarouselItem = ({ imagePath, alternative, caption }: CarouselItem) => {
  return (
    <div className="carousel-item">
      <div className="carousel-item__image-container">
        <img
          src={imagePath}
          alt={alternative}
          className="carousel-item__image"
        />
      </div>
      {/* <p className="carousel-item__caption">
        {caption}
      </p> */}
    </div>
  )
}

export default CarouselItem
