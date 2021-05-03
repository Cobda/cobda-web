import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const AccountProduct = () => {
  const [fullName, setfullName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [imagePath, setImagePath] = useState<string | undefined>('')
  const { t } = useTranslation('account')
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      const { name, image } = session.user
      const imagePath = image ? image : '#'
      const [username, firstname, lastname] = name!.split('/')
      setfullName(firstname + ' ' + lastname)
      setUsername(username)
      setImagePath(imagePath)
    }
  }, [])

  return (
    <div className="account-product">
      <figure className="account-product__image-container">
        <img className="account-product__image" src={imagePath} alt="Profile Image" />
        <figcaption className="account-product__caption">
          <h2 className="account-product__title">{fullName}</h2>
          <h2 className="account-product__short-name">{username}</h2>
        </figcaption>
      </figure>
    </div>
  )
}

export default AccountProduct
