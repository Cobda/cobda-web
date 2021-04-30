import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import { productState } from '../../recoil/atoms/product'

const ProductMedia = () => {
  const [selectedImagePath, setSelectedImagePath] = useState('')
  const [imagePaths, setImagePaths] = useState([])
  const product: any = useRecoilValue(productState)

  useEffect(() => {
    const { productImagePath } = product
    if (productImagePath) {
      const productImagePaths = productImagePath.split('?')

      setImagePaths(productImagePaths)
      setSelectedImagePath(productImagePaths[0])
    }
  }, [product])

  const renderImage = () => (
    <div className="product-media__image-wrapper">
      <img className="product-media__image" src={selectedImagePath} alt="Product Image" />
    </div>
  )

  const renderImageSelector = () => {
    const images = imagePaths.map((path: string, index: number) => {
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
