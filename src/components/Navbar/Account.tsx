import React from 'react'
import { useRouter } from 'next/router'

interface NavbarAccount {
  isUserSignedIn?: boolean
}

const NavbarAccount = ({ isUserSignedIn }: NavbarAccount) => {
  const router = useRouter()

  const handleSignInClick = () => {
    // TODO: Open SignIn modal
  }

  const handleSignUpClick = () => {
    router.push('/sign-up')
  }

  const handleAvatarClick = () => {
    // TODO: Expand dropdown or sth
  }

  const renderAvatarButton = () => (
    <button className="navbar__avatar-button" onClick={handleAvatarClick}>
      <img src="#" alt="avatar" />
    </button>
  )

  const renderAuthenticationButton = () => (
    <>
      <button className="navbar__account-button" onClick={handleSignInClick}>
        Sign In
      </button>
      <button className="navbar__account-button" onClick={handleSignUpClick}>
        Sign Up
      </button>
    </>
  )

  return (
    <div className="navbar__account">
      {isUserSignedIn ? renderAvatarButton() : renderAuthenticationButton()}
    </div>
  )
}

export default NavbarAccount
