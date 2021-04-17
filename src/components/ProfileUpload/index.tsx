import React, { ReactNode, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

interface ProfileUpload {
  readonly onUpload: (isUploaded: boolean) => void
}

const ProfileUpload = ({ onUpload }: ProfileUpload) => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('')
  const { t } = useTranslation('sign-up')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    const hasSingleFile: boolean = files?.length === 1

    if (files && hasSingleFile) {
      const [selectedFile] = files
      const imageUrl: string = URL.createObjectURL(selectedFile)
      setSelectedImageUrl(imageUrl)
      onUpload(true)
    }
  }

  const renderProfileImage = () => {
    const defaultProfileImage: ReactNode = (
      <img
        className="profile-upload__image"
        src="/images/default-profile-image.png"
        alt="Sign-up Profile Upload Image"
      />
    )
    const selectedProfileImage: ReactNode = (
      <>
        <img
          className="profile-upload__image profile-upload__image--selected"
          src={selectedImageUrl}
          alt="Uploaded Profile Image"
        />
        <img className="profile-upload__icon" src="/icons/pencil.svg" alt="Profile Image Edit Icon" />
      </>
    )

    return selectedImageUrl ? selectedProfileImage : defaultProfileImage
  }

  const renderProfileUpload = () => {
    const labelClassName: string = selectedImageUrl
      ? 'profile-upload__label profile-upload__label--selected'
      : 'profile-upload__label'

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
      {renderProfileUpload()}
      <figcaption className="profile-upload__caption">
        <Trans i18nKey={t('profileImageCaution')} components={[<span />]} />
      </figcaption>
    </figure>
  )
}

export default ProfileUpload
