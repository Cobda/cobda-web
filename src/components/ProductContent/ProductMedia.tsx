import React from 'react'
import { useState, useEffect } from 'react'
import cx from 'classnames'

//TO DO: Retrieve images from database instead
const imagePaths: string[] = [
  '/images/nike-jordan-off-white.jpg',
  '/images/nike-woman-running-shoe.jpg',
  '/images/nike-air-vapormax-360-herren.jpg'
]

const useImage = ({ src }: any) => {
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setLoaded(true)
  }, [src])
  return { isLoaded }
}

const Cover = ({ src }: any) => {
  const { isLoaded } = useImage({ src })
  return <img className={cx('product-media__image', 'smooth', { isLoaded })} src={src} />
}

const useSrc = () => {
  const [selectedSrc, setSrc] = useState(imagePaths[0])
  return {
    imageSelectorButton: imagePaths.map((src) => (
      <button
        // TO DO: Change image location
        style={{ background: `url(${src}) no-repeat; background-size: cover` }}
        className={cx('product-media__button', { active: src === selectedSrc })}
        onClick={() => setSrc(src)}
        key={src}
      ></button>
    )),
    selectedImageCover: imagePaths.map((src) => (src === selectedSrc ? <Cover key={src} src={selectedSrc} /> : null))
  }
}

const ProductMedia = () => {
  const { imageSelectorButton, selectedImageCover } = useSrc()

  return (
    <div className="product-media">
      <div className="product-media__image-container">{selectedImageCover}</div>
      <br />
      <div className="product-media__image-selector">{imageSelectorButton}</div>
    </div>
  )
}

export default ProductMedia
