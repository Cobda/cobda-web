import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
interface NavbarAccount {
  readonly isUserSignedIn?: boolean
}

const NavbarAccount = ({ isUserSignedIn }: NavbarAccount) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleSignInClick = () => {
    router.push('/sign-in')
  }

  const handleSignUpClick = () => {
    router.push('/sign-up')
  }

  const handleAvatarClick = () => {
    // TODO: Expand dropdown or sth
    router.push('/account')
  }

  const renderAvatarLink = () => (
    <a
      className="navbar__link navbar__link--avatar"
      onClick={handleAvatarClick}>
      <img src="#" alt="avatar" />
    </a>
  )

  const renderAuthenticationLink = () => (
    <>
      <a
        className="navbar__link navbar__link--sign-in"
        onClick={handleSignInClick}>
        {t('signIn')}
      </a>
      <a
        className="navbar__link navbar__link--sign-up"
        onClick={handleSignUpClick}>
        {t('signUp')}
      </a>
    </>
  )

  return (
    <div className="navbar__account">
      {isUserSignedIn ? renderAvatarLink() : renderAuthenticationLink()}
    </div>
  )
}

export default NavbarAccount
