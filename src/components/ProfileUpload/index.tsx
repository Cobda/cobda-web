import React, { useState } from 'react'
import axios from 'axios'

const ProfileUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [isImageSelected, setImageSelected] = useState<boolean>(false)

  const uploadImage = async (name: string, file: File) => {
    const formData = new FormData()
    formData.append(name, file)
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    return await axios.post('/api/uploads', formData, config)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name } = event.target

    if (files) {
      const selectedFile = files[0]
      uploadImage(name, selectedFile).then(() => {
        setSelectedImage(selectedFile)
        setImageSelected(true)
      })
    }
  }

  const renderProfileImage = () => {
    const selectedImageSrc = selectedImage
      ? `/uploads/${selectedImage.name}`
      : '/images/broken-image.png'

    const defaultProfileImage = (
      <img
        className="profile-upload__image"
        src="/images/default-profile-image.png"
        alt="Change Profile Image"
      />
    )

    const selectedProfileImage = (
      <>
        <img
          className="profile-upload__image profile-upload__image--selected"
          src={selectedImageSrc}
          alt="Change Profile Image"
        />
        <img
          className="profile-upload__icon"
          src="/icons/pencil.svg"
          alt="Edit Profile Image"
        />
      </>
    )

    return isImageSelected ? selectedProfileImage : defaultProfileImage
  }

  const renderProfileUpload = () => {
    const labelClassName = !isImageSelected
      ? 'profile-upload__label'
      : 'profile-upload__label profile-upload__label--selected'

    return (
      <label className={labelClassName}>
        <input
          className="profile-upload__input"
          accept="image/png, image/jpeg"
          type="file"
          name="fileInput"
          onChange={handleInputChange}
        />
        {renderProfileImage()}
      </label>
    )
  }

  return (
    <figure className="profile-upload">
      {renderProfileUpload()}
      <figcaption className="profile-upload__caption">
        <span>{'Maximum file size 1.5 MB'}</span>
        {'JPG & PNG only'}
      </figcaption>
    </figure>
  )
}

export default ProfileUpload
