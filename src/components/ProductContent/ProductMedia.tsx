import React from 'react'
import { useState, useEffect } from 'react'
import cx from 'classnames'

//TO DO: Retrieve images from database instead
const srcs = [
  '/images/nike-jordan-off-white.jpg',
  '/images/nike-woman-running-shoe.jpg',
  '/images/nike-air-vapormax-360-herren.jpg',
]

interface ISrc {
  src: string
}

const useImage = ({ src }: ISrc) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setLoaded(true)
  }, [src])
  return {
    loaded,
  }
}

const Cover = ({ src }: ISrc) => {
  const { loaded } = useImage({ src })
  return (
    <img
      className={cx('product-media__image', 'smooth', { loaded })}
      src={src}
    />
  )
}

const useSrc = () => {
  const [selectedSrc, setSrc] = useState(srcs[0])
  return {
    buttons: srcs.map((src) => (
      <button
        // TO DO: Change image location
        style={{ background: `url(${src}) no-repeat; background-size: cover;` }}
        className={cx('product-media__button', { active: src === selectedSrc })}
        onClick={() => setSrc(src)}
        key={src}
      ></button>
    )),
    cover: srcs.map((src) =>
      src === selectedSrc ? <Cover key={src} src={selectedSrc} /> : null
    ),
  }
}

const ProductMedia = () => {
  return (
    <div className="product-media">
      <header className="product-media__header">
        <h3 className="product-media__title">
          Images
        </h3>
      </header>
      <div className="product-media__image-container">
        <div className="product-media__image"></div>
      </div>
    </div>
  )
}

export default ProductMedia
