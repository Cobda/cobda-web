import React, { ReactNode, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import axios from 'axios'

interface ProfileUpload {
  readonly imageUrl: string
  readonly isImageVerified: boolean
  readonly onUpload: (image: string) => void
  readonly onImageVerified: (isVerified: boolean) => void
}

const ProfileUpload = ({ imageUrl, isImageVerified, onUpload, onImageVerified }: ProfileUpload) => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const { t } = useTranslation('sign-up')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const { files } = event.target
    const hasSingleFile: boolean = files?.length === 1

    const validateImage = async (image: string, validKeywords: string[]) => {
      const encodedImage: string | undefined = image.split(',')[1]
      await axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/images/`, {
          base64EncodedImage: encodedImage,
          validKeywords
        })
        .then((response) => {
          if (response.data?.isAllowed) {
            onImageVerified(true)
          } else {
            onImageVerified(false)
          }
        })
        .catch(() => {
          onImageVerified(false)
        })
      setLoading(false)
    }

    if (files && hasSingleFile) {
      const [selectedFile] = files
      const validKeywords: string[] = ['person', 'people', 'human', 'man', 'woman', 'head', 'body']
      let reader: any = new FileReader()
      reader.readAsDataURL(selectedFile)
      reader.onload = () => {
        const { result } = reader
        onUpload(result)
        validateImage(result, validKeywords)
      }
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
          src={imageUrl}
          alt="Uploaded Profile Image"
        />
        <img className="profile-upload__icon" src="/icons/pencil.svg" alt="Profile Image Edit Icon" />
      </>
    )

    return imageUrl ? selectedProfileImage : defaultProfileImage
  }

  const renderProfileUpload = () => {
    const selectedImageClassName: string =
      'profile-upload__label ' + (isImageVerified ? 'profile-upload__label--valid' : 'profile-upload__label--invalid')

    const labelClassName: string = imageUrl ? selectedImageClassName : 'profile-upload__label'

    return isLoading ? (
      <img src="/icons/loading.svg" alt="Loading Icon" />
    ) : (
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
