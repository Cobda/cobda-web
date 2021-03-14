import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const ProfileUpload = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('')
  const router = useRouter()
  const { t } = useTranslation('sign-up')

  useEffect(() => {
    // Trigger when refreshing page
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (!selectedImageUrl) return
      event.preventDefault()

      return (event.returnValue = t('warningText'))
    }

    // Trigger when routing to other page
    const handleBrowseAway = () => {
      if (!selectedImageUrl) return
      if (window.confirm(t('warningText'))) return

      router.events.emit('routeChangeError')
      throw 'routeChange aborted.'
    }

    window.addEventListener('beforeunload', handleWindowClose)
    router.events.on('routeChangeStart', handleBrowseAway)

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose)
      router.events.off('routeChangeStart', handleBrowseAway)
    }
  }, [selectedImageUrl])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    const hasSingleFile: boolean = files?.length === 1

    if (files && hasSingleFile) {
      const imageUrl: string = URL.createObjectURL(files[0])
      setSelectedImageUrl(imageUrl)
    }
  }

  const renderProfileImage = () => {
    const defaultProfileImage: ReactNode = (
      <img
        className="profile-upload__image"
        src="/images/default-profile-image.png"
        alt="Profile Upload Image"
      />
    )
    const selectedProfileImage: ReactNode = (
      <>
        <img
          className="profile-upload__image profile-upload__image--selected"
          src={selectedImageUrl}
          alt="Profile Upload Image"
        />
        <img
          className="profile-upload__icon"
          src="/icons/pencil.svg"
          alt="Profile Upload Icon"
        />
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
        <Trans i18nKey={t('profileImageCaution')} components={[<span />]} />
      </figcaption>
    </figure>
  )
}

export default ProfileUpload
