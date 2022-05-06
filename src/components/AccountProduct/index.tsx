import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { userState } from '../../recoil/atoms'

const AccountProduct = () => {
  const [email, setEmail] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [fullName, setFullName] = useState<string>('')
  const [imagePath, setImagePath] = useState<string>('')
  const user: any = useRecoilValue(userState)
  const { t } = useTranslation('account')

  useEffect(() => {
    if (user) {
      const { email, username, firstName, lastName, profileImagePath } = user
      const fullName = `${firstName} ${lastName}`
      const imagePath = profileImagePath ? profileImagePath : '#'
      setEmail(email)
      setUsername(username)
      setFullName(fullName)
      setImagePath(imagePath)
    }
  }, [user])

  return (
    <div className="account-product">
      <figure className="account-product__image-container">
        <img className="account-product__image" src={imagePath} alt="Profile Image" />
        <figcaption className="account-product__caption">
          <h2 className="account-product__title">{fullName}</h2>
          <h2 className="account-product__subtitle">{username}</h2>
          <h2 className="account-product__subtitle">{email}</h2>
        </figcaption>
      </figure>
    </div>
  )
}

export default AccountProduct
