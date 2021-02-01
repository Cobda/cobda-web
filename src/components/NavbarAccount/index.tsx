import React from 'react'
import { useRouter } from 'next/router'

interface NavbarAccount {
  isUserExist?: boolean
}

const NavbarAccount = ({ isUserExist }: NavbarAccount) => {
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

  return (
    <div className="navbar__account">
      {isUserExist ? (
        <button className="navbar__avatar-button" onClick={handleAvatarClick}>
          <img src="#" alt="avatar" />
        </button>
      ) : (
        <>
          <button
            className="navbar__account-button"
            onClick={handleSignInClick}>
            Sign In
          </button>
          <button
            className="navbar__account-button"
            onClick={handleSignUpClick}>
            Sign Up
          </button>
        </>
      )}
    </div>
  )
}

export default NavbarAccount
