import React, { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

const ProfileUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const router = useRouter()

  useEffect(() => {
    const warningText: string =
      'You have unsaved changes - are you sure you wish to leave this page?'

    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (!selectedImage) return
      event.preventDefault()

      return (event.returnValue = warningText)
    }

    const handleBrowseAway = () => {
      if (!selectedImage) return
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
  }, [selectedImage])

  const uploadImage = async (name: string, file: File) => {
    const formData: FormData = new FormData()
    formData.append(name, file)
    const config: Object = {
      headers: { 'content-type': 'multipart/form-data' },
    }

    return await axios.post('/api/uploads', formData, config)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name } = event.target
    const hasSingleFile = files?.length === 1

    if (files && hasSingleFile) {
      const selectedFile: File = files[0]
      uploadImage(name, selectedFile).then(() => {
        setSelectedImage(selectedFile)
      })
    }
  }

  const renderProfileImage = () => {
    const selectedImageSrc: string = selectedImage
      ? `/uploads/${selectedImage.name}`
      : '/images/broken-image.png'

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
          src={selectedImageSrc}
          alt="Profile Upload Image"
        />
        <img
          className="profile-upload__icon"
          src="/icons/pencil.svg"
          alt="Profile Upload Icon"
        />
      </>
    )

    return selectedImage ? selectedProfileImage : defaultProfileImage
  }

  const renderProfileUpload = () => {
    const labelClassName: string = selectedImage
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
