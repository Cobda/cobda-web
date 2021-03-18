import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const ProfileUpload = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('')
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  useEffect(() => {
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (selectedImageUrl) {
        event.preventDefault()
        return (event.returnValue = t('warningText'))
      }
    }

    const handleBrowseAway = () => {
      if (selectedImageUrl && !window.confirm(t('warningText'))) {
        router.events.emit('routeChangeError')
        throw 'routeChange aborted.'
      }
    }

    window.addEventListener('beforeunload', handleWindowClose)
    router.events.on('routeChangeStart', handleBrowseAway)

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose)
      router.events.off('routeChangeStart', handleBrowseAway)
    }
  }, [selectedImageUrl])

  const handleInputChange = (setProfileImage: (image: string) => void) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { files } = event.target
    const hasSingleFile: boolean = files?.length === 1

    if (files && hasSingleFile) {
      const [selectedFile] = files
      const imageUrl: string = URL.createObjectURL(selectedFile)
      setProfileImage(imageUrl)
    }
  }

  const renderProfileImage = (imageUrl: string) => {
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
        <img
          className="profile-upload__icon"
          src="/icons/pencil.svg"
          alt="Profile Image Edit Icon"
        />
      </>
    )

    return selectedImageUrl ? selectedProfileImage : defaultProfileImage
  }

  const renderProfileUpload = (
    selectedImageUrl: string,
    profileImage: ReactNode
  ) => {
    const labelClassName: string = selectedImageUrl
      ? 'profile-upload__label profile-upload__label--selected'
      : 'profile-upload__label'

    return (
      <label className={labelClassName}>
        <input
          className="profile-upload__input"
          accept="image/png, image/jpeg"
          type="file"
          onChange={handleInputChange(setSelectedImageUrl)}
        />
        {profileImage}
      </label>
    )
  }

  return (
    <figure className="profile-upload">
      {renderProfileUpload(
        selectedImageUrl,
        renderProfileImage(selectedImageUrl)
      )}
      <figcaption className="profile-upload__caption">
        <Trans i18nKey={t('profileImageCaution')} components={[<span />]} />
      </figcaption>
    </figure>
  )
}

export default ProfileUpload
