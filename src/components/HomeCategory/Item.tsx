import React from 'react'

interface HomeCategoryItem {
  readonly imagePath?: string
  readonly alternate?: string
  readonly caption?: string
}

const HomeCategoryItem = ({imagePath, alternate, caption}: HomeCategoryItem) => {
  return (
    <div className="home-category__item">
      <figure className="home-category__image-container">
        <img
          src={imagePath}
          alt={alternate}
          className="home-category__image"
        />
        <figcaption className="home-category__caption">
          {caption}
        </figcaption>
      </figure>
    </div>
  )
}

export default HomeCategoryItem