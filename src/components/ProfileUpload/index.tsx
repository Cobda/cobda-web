import React, { useState } from 'react'
import axios from 'axios'

const ProfileUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [isImageSelected, setImageSelected] = useState<boolean>(false)

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files, name } = event.target

    if (files) {
      const config = {
        headers: { 'content-type': 'multipart/form-data' },
      }
      const formData = new FormData()
      formData.append(name, files[0])

      console.log('Form data: ', formData)

      const response = await axios.post('/api/uploads', formData, config)
      console.log('Response: ', response.data)

      setSelectedImage(files[0])
      setImageSelected(true)
    }
  }

  const renderProfileImage = () => {
    return !isImageSelected ? (
      <img
        className="profile-upload__image"
        src="images/default-profile-image.png"
        alt="Change Profile Image"
      />
    ) : (
      // TODO: Use selected file instead
      <>
        <img
          className="profile-upload__image profile-upload__image--selected"
          src="/images/yeezy-380.jpg"
          alt="Change Profile Image"
        />
        <img
          className="profile-upload__icon"
          src="/icons/pencil.svg"
          alt="Edit Profile Image"
        />
      </>
    )
  }

  const renderProfileButton = () => {
    const labelClassName = !isImageSelected
      ? 'profile-upload__label'
      : 'profile-upload__label profile-upload__label--selected'

    return (
      <label className={labelClassName}>
        <input
          className="profile-upload__input"
          accept="image/png, image/jpeg"
          type="file"
          onChange={handleInputChange}
        />
        {renderProfileImage()}
      </label>
    )
  }

  return (
    <figure className="profile-upload">
      {renderProfileButton()}
      <figcaption className="profile-upload__caption">
        <span>{'Maximum file size 1.5 MB'}</span>
        {'JPG & PNG only'}
      </figcaption>
    </figure>
  )
}

export default ProfileUpload
