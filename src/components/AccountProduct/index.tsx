import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { userState } from '../../recoil/atoms'

const AccountProduct = () => {
  const [fullName, setfullName] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [imagePath, setImagePath] = useState<string | undefined>('')
  const { t } = useTranslation('account')
  const user: any = useRecoilValue(userState)

  useEffect(() => {
    if (user) {
      const { username, firstName, lastName, profileImagePath } = user
      const imagePath = profileImagePath ? profileImagePath : '#'
      setfullName(firstName + ' ' + lastName)
      setUsername(username)
      setImagePath(imagePath)
    }
  }, [user])

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
