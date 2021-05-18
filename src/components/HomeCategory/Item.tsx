import React from 'react'

interface HomeCategoryItem {
  readonly imagePath?: string
  readonly alternate?: string
  readonly caption?: string
  readonly onClick?: () => void
}

const HomeCategoryItem = ({ imagePath, alternate, caption, onClick }: HomeCategoryItem) => {
  return (
    <figure className="home-category__item" onClick={onClick}>
      <img src={imagePath} alt={alternate} className="home-category__image" />
      <figcaption className="home-category__caption">{caption}</figcaption>
    </figure>
  )
}

export default HomeCategoryItem
