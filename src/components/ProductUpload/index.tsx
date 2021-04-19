import React, { ReactNode, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import ImageUploading, { ImageType, ImageListType } from 'react-images-uploading'

interface ProductUpload {
  readonly onUpload: (isUploaded: boolean) => void
}

const ProductUpload = ({ onUpload }: ProductUpload) => {
  const [images, setImages] = useState<ImageListType>([])
  const { t } = useTranslation('product-registration')

  const handleImageChange = (imageList: ImageListType) => {
    const hasImageList: boolean = imageList.length > 0
    setImages(imageList)
    onUpload(hasImageList)
  }

  return (
    <ImageUploading multiple value={images} onChange={handleImageChange} maxNumber={3} acceptType={['jpg', 'png']}>
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => {
        const hasImageList: boolean = imageList.length > 0
        // TODO: Fix naming here
        const dragDivClassName: string = isDragging ? 'product-upload product-upload--dragging' : 'product-upload'
        const divClassName: string = hasImageList ? 'product-upload product-upload--selected' : dragDivClassName

        const renderProductImage = () => {
          const defaultProductImage: ReactNode = (
            <figure className="product-upload__figure" onClick={onImageUpload}>
              <img className="product-upload__image" src="/icons/upload-image.svg" alt="Uploaded Profile Image" />
              <figcaption className="product-upload__caption">{t('addThreeImages')}</figcaption>
            </figure>
          )
          const selectedProductImage: ReactNode = () =>
            imageList.map((image: ImageType, index: number) => {
              const handleImageUpdate = () => onImageUpdate(index)
              const handleImageRemove = () => onImageRemove(index)

              return (
                <div key={index} className="product-upload__image-container">
                  <img
                    className="product-upload__image product-upload__image--selected"
                    src={image.dataURL}
                    alt="Uploaded Profile Image"
                  />
                  <div className="product-upload__icon-container">
                    <a className="product-upload__link" onClick={handleImageUpdate}>
                      <img className="product-upload__icon" src="/icons/reupload.svg" alt="Reupload Image Icon" />
                    </a>
                    <a className="product-upload__link" onClick={handleImageRemove}>
                      <img className="product-upload__icon" src="/icons/remove.svg" alt="Remove Image Icon" />
                    </a>
                  </div>
                </div>
              )
            })

          return hasImageList ? selectedProductImage : defaultProductImage
        }

        return (
          <div className={divClassName} {...dragProps}>
            {renderProductImage()}
          </div>
        )
      }}
    </ImageUploading>
  )
}

export default ProductUpload
