import React from 'react'

interface CarouselItem {
  readonly imagePath: string
  readonly alternate: string
  readonly name: string
  readonly role: string
  readonly quote: string
}

const CarouselItem = ({ imagePath, alternate, name, role, quote }: CarouselItem) => {
  return (
    <div className="carousel-item carousel-item--quote-box">
      <div className="carousel-item__profile-container">
        {/* <div className="carousel-item__profile-background"></div> */}
        <div className="carousel-item__profile-card">
          <figure className="">
            <img
              src={imagePath}
              alt={alternate}
              className="carousel-item__image carousel-item__image--profile"
            />
            <figcaption className="carousel-item__caption">{name}</figcaption>
            <span className="carousel-item__role">{role}</span>
          </figure>
        </div>
      </div>
      <div className="carousel-item__quote-container">
        <header className="carousel-item__header">
          <h3 className="carousel-item__title">QUOTES</h3>
        </header>
        {/* TODO */}
        <p>{quote}</p>
      </div>
    </div>
  )
}

export default CarouselItem
