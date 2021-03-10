import React, { useState } from 'react'

const ProfileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isFileSelected, setFileSelected] = useState<boolean>(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      setSelectedFile(files[0])
      setFileSelected(true)
    }
  }

  const renderProfileImage = () => {
    return !isFileSelected ? (
      <img
        className="profile-upload__image"
        src="images/default-profile-image.png"
        alt="Change Profile Image"
      />
    ) : (
      // TODO: Use selected file instead
      <img
        className="profile-upload__image profile-upload__image--selected"
        src="/images/yeezy-380.jpg"
        alt="Change Profile Image"
      />
    )
  }

  const renderProfileButton = () => {
    const buttonClassName = !isFileSelected
      ? 'profile-upload__button'
      : 'profile-upload__button profile-upload__button--selected'

    return (
      <label className={buttonClassName}>
        <input
          className="profile-upload__input"
          type="file"
          accept="image/png, image/jpeg"
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
        {'Maximum file size 1.5 MB'}&nbsp;&nbsp;&nbsp;&nbsp;{'JPG & PNG only'}
      </figcaption>
    </figure>
  )
}

export default ProfileUpload
