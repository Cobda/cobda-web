import React, { ReactNode } from 'react'
import ImageUploading, { ImageType, ImageListType, ErrorsType } from 'react-images-uploading'

interface ProductUpload {
  readonly images: ImageListType
  readonly maxNumber?: number
  readonly acceptType?: string[]
  readonly maxFileSize?: number
  readonly imageCaption?: string
  readonly onUpload: (imageList: ImageListType) => void
  readonly onError: (errors: ErrorsType) => void
}

const ProductUpload = ({
  images,
  maxNumber,
  acceptType,
  maxFileSize,
  imageCaption,
  onUpload,
  onError
}: ProductUpload) => {
  const handleImageChange = (imageList: ImageListType) => {
    // TODO: Handle validation from backend
    onUpload(imageList)
  }

  return (
    <ImageUploading
      multiple
      value={images}
      maxNumber={maxNumber}
      acceptType={acceptType}
      maxFileSize={maxFileSize}
      onChange={handleImageChange}>
      {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps, errors }) => {
        onError(errors)
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
              <figcaption className="product-upload__caption">{imageCaption}</figcaption>
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

        const renderAddMoreButton = () => {
          const isImageAddable: boolean = imageList.length > 0 && imageList.length < 3
          const addMoreButton: ReactNode = (
            <div className="product-upload__icon-wrapper product-upload__icon-wrapper--large" onClick={onImageUpload}>
              <img className="product-upload__icon" src="/icons/plus.svg" alt="Add Image Icon" />
            </div>
          )

          return isImageAddable ? addMoreButton : <></>
        }

        return (
          <>
            <div className={classNameWithSelectedModifier} {...dragProps}>
              {renderProductImage()}
              {renderAddMoreButton()}
            </div>
          </>
        )
      }}
    </ImageUploading>
  )
}

export default ProductUpload
