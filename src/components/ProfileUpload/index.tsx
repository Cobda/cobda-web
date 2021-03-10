import React, { useState } from 'react'

const ProfileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File>()
  const [isFileSelected, setFileSelected] = useState<boolean>(false)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files) {
      setSelectedFile(files[0])
      setFileSelected(true)
    }
  }

  const renderProfileImage = () => {
    return isFileSelected ? (
      <img
        className="profile-upload__image"
        src="images/default-profile-image.png"
        alt="Change Profile Image"
      />
    ) : (
      <div>Selected image</div>
    )
  }

  return (
    <div className="profile-upload">
      <figure className="profile-upload__image-container">
        <label className="profile-upload__button">
          <input
            className="profile-upload__input"
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleInputChange}
          />
          {renderProfileImage()}
        </label>
        <figcaption className="profile-upload__caption">
          {'Maximum file size 1.5 MB'}&nbsp;&nbsp;&nbsp;&nbsp;{'JPG & PNG only'}
        </figcaption>
      </figure>
    </div>
  )
}

export default ProfileUpload
