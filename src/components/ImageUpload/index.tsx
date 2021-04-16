import React, { useState } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'

const ImageUpload = () => {
  const [images, setImages] = useState<ImageListType>([])

  const handleImageChange = (imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
    console.log('Image list: ', imageList)
    console.log('Add update index: ', addUpdateIndex)
    setImages(imageList)
  }

  return (
    <div className="App">
      <ImageUploading multiple value={images} onChange={handleImageChange}>
        {({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
          <div className="upload__image-wrapper">
            <button style={isDragging ? { color: 'red' } : undefined} onClick={onImageUpload} {...dragProps}>
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

export default ImageUpload
