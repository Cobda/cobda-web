import React from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
// TODO: Uncomment this import
// import { useSession } from 'next-auth/client'

// TODO: Remove the interface
interface NavbarAccount {
  readonly isUserSignedIn?: boolean
}

const NavbarAccount = ({ isUserSignedIn }: NavbarAccount) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  // TODO: Use this authentication instead
  // const [session] = useSession()

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

  // TODO: Use this return instead (try check if ternary works here)
  // return (
  //   <div className="navbar__account">
  //     {!session && (renderAuthenticationLink())}
  //     {session && (renderAvatarLink())}
  //   </div>
  // )

  // return (
  //   <div className="navbar__account">
  //     {session ? renderAvatarLink() : renderAuthenticationLink()}
  //   </div>
  // )

  return (
    <div className="navbar__account">
      {isUserSignedIn ? renderAvatarLink() : renderAuthenticationLink()}
    </div>
  )
}

export default NavbarAccount
