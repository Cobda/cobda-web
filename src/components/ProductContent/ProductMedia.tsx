import React from 'react'
import { useState } from 'react'

//TODO: Retrieve images from database instead
const imagePaths: string[] = [
  '/images/nike-jordan-off-white.jpg',
  '/images/nike-woman-running-shoe.jpg',
  '/images/yeezy-380.jpg'
]

const ProductMedia = () => {
  const [selectedImagePath, setSelectedImagePath] = useState<string>(imagePaths[0])

  const renderImage = () => (
    <div className="product-media__image-wrapper">
      <img className="product-media__image" src={selectedImagePath} />
    </div>
  )

  const renderImageSelector = () => {
    const images = imagePaths.map((path, index) => {
      const handleImageClick = (path: string) => () => {
        setSelectedImagePath(path)
      }

      const imageClassName: string =
        path === selectedImagePath
          ? 'product-media__thumbnail product-media__thumbnail--active'
          : 'product-media__thumbnail'

      return (
        <div key={index} className="product-media__thumbnail-wrapper" onClick={handleImageClick(path)}>
          <img className={imageClassName} src={path} alt="Product Thumbnail" />
        </div>
      )
    })

    return <div className="product-media__image-selector">{images}</div>
  }

  return (
    <div className="product-media">
      {renderImage()}
      {renderImageSelector()}
    </div>
  )
}

export default ProductMedia
