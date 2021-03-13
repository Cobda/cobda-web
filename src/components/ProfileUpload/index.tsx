import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'

const ProfileUpload = () => {
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('')
  const router = useRouter()

  useEffect(() => {
    const warningText: string =
      'You have unsaved changes - are you sure you wish to leave this page?'

    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (!selectedImageUrl) return
      event.preventDefault()

      return (event.returnValue = warningText)
    }

    const handleBrowseAway = () => {
      if (!selectedImageUrl) return
      if (window.confirm(warningText)) return

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
    const { files, name } = event.target
    const hasSingleFile = files?.length === 1

    if (files && hasSingleFile) {
      setSelectedImageUrl(URL.createObjectURL(files[0]))
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
        <span>{'Maximum file size 1.5 MB'}</span>
        {'JPG & PNG only'}
      </figcaption>
    </figure>
  )
}

export default ProfileUpload
