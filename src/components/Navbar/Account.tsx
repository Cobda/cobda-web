import React from 'react'
import { useRouter } from 'next/router'

interface NavbarAccount {
  isUserSignedIn?: boolean
}

const NavbarAccount = ({ isUserSignedIn }: NavbarAccount) => {
  const router = useRouter()

  const handleSignInClick = () => {
    router.push('/sign-in')
  }

  const handleSignUpClick = () => {
    router.push('/sign-up')
  }

  const handleAvatarClick = () => {
    // TODO: Expand dropdown or sth
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
        Sign In
      </a>
      <a
        className="navbar__link navbar__link--sign-up"
        onClick={handleSignUpClick}>
        Sign Up
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
