import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { useSession } from 'next-auth/client'

const NavbarAccount = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const [session] = useSession()

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
        className="navbar__link navbar__link--secondary"
        onClick={handleSignInClick}>
        {t('signIn')}
      </a>
      <a
        className="navbar__link navbar__link--primary"
        onClick={handleSignUpClick}>
        {t('signUp')}
      </a>
    </>
  )

  return (
    <div className="navbar__account">
      {session ? renderAvatarLink() : renderAuthenticationLink()}
    </div>
  )
}

export default NavbarAccount
