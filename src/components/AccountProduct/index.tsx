import React, { useEffect, useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { userState } from '../../recoil/atoms'

const AccountProduct = () => {
  const user: any = useRecoilValue(userState)
  const { t } = useTranslation('account')
  const { email, username, firstName, lastName, profileImagePath } = user
  const fullName = `${firstName} ${lastName}`
  const imagePath = profileImagePath ? profileImagePath : '#'

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
