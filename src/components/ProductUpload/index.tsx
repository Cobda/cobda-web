import React, { ReactNode, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import ImageUploading, { ImageType, ImageListType, ErrorsType } from 'react-images-uploading'

interface ProductUpload {
  readonly images: ImageListType
  readonly maxNumber?: number
  readonly acceptType?: string[]
  readonly onUpload: (imageList: ImageListType) => void
}

const ProductUpload = ({ images, maxNumber, acceptType, onUpload }: ProductUpload) => {
  const { t } = useTranslation('product-registration')

  const handleImageChange = (imageList: ImageListType) => {
    onUpload(imageList)
  }

  const handleErrorUpload = (errors: ErrorsType, files?: ImageListType | undefined) => {
    // TODO: Handle error from backend
    console.log('Upload Errors: ', errors, ' with files: ', files)
  }

  return (
    <ImageUploading
      multiple
      value={images}
      maxNumber={maxNumber}
      acceptType={acceptType}
      onChange={handleImageChange}
      onError={handleErrorUpload}>
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => {
        const hasImageList: boolean = imageList.length > 0
        const classNameWithDraggingModifier: string = isDragging
          ? 'product-upload product-upload--dragging'
          : 'product-upload'
        const classNameWithSelectedModifier: string = hasImageList
          ? 'product-upload product-upload--selected'
          : classNameWithDraggingModifier

        const renderProductImage = () => {
          const defaultProductImage: ReactNode = (
            <figure className="product-upload__figure" onClick={onImageUpload}>
              <img className="product-upload__image" src="/icons/upload-image.svg" alt="Uploaded Profile Image" />
              <figcaption className="product-upload__caption">{t('addThreeImages')}</figcaption>
            </figure>
          )
          const selectedProductImage: ReactNode = imageList.map((image: ImageType, index: number) => {
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
                  <div className="product-upload__icon-wrapper" onClick={handleImageUpdate}>
                    <img className="product-upload__icon" src="/icons/reupload.svg" alt="Reupload Image Icon" />
                  </div>
                  <div className="product-upload__icon-wrapper" onClick={handleImageRemove}>
                    <img className="product-upload__icon" src="/icons/remove.svg" alt="Remove Image Icon" />
                  </div>
                </div>
              </div>
            )
          })

          return hasImageList ? selectedProductImage : defaultProductImage
        }

        return (
          <div className={classNameWithSelectedModifier} {...dragProps}>
            {renderProductImage()}
          </div>
        )
      }}
    </ImageUploading>
  )
}

export default ProductUpload
