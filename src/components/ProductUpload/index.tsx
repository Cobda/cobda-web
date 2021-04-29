import axios from 'axios'
import React, { ReactNode, useState } from 'react'
import ImageUploading, { ImageType, ImageListType, ErrorsType } from 'react-images-uploading'
import { baseURL } from '../../constant'
import { profileImagePath } from '../Navbar/constant'

interface ProductUpload {
  readonly images: ImageListType
  readonly maxNumber?: number
  readonly acceptType?: string[]
  readonly maxFileSize?: number
  readonly imageCaption?: string
  readonly onUpload: (imageList: ImageListType) => void
  readonly onError: (errors: ErrorsType) => void
  readonly onImageVerified: (isVerified: boolean) => void
}

const ProductUpload = ({
  images,
  maxNumber,
  acceptType,
  maxFileSize,
  imageCaption,
  onUpload,
  onError,
  onImageVerified
}: ProductUpload) => {
  const handleImageChange = async (imageList: ImageListType) => {
    if (imageList.length > 0) {
      onImageVerified(true)
      const imagePath: string | undefined = imageList[0].dataURL?.split(',')[1]

      await axios
        .post(baseURL + '/api/images/', {
          base64EncodedImage: imagePath
        })
        .then((response) => {
          if (response.data?.isAllowed) {
            onUpload(imageList)
          } else {
            onImageVerified(false)
          }
        })
        .catch(() => onImageVerified(false))
    } else {
      onUpload(imageList)
      onImageVerified(false)
    }
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
        const isImageSelected: boolean = imageList.length > 0
        const draggingModifierClassName: string = isDragging
          ? 'product-upload product-upload--dragging'
          : 'product-upload'
        const productUploadClassName: string = isImageSelected
          ? 'product-upload product-upload--selected'
          : draggingModifierClassName

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
                  alt="Uploaded Product Image"
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

          return isImageSelected ? selectedProductImage : defaultProductImage
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
          <div className={productUploadClassName} {...dragProps}>
            {renderProductImage()}
            {renderAddMoreButton()}
          </div>
        )
      }}
    </ImageUploading>
  )
}

export default ProductUpload
