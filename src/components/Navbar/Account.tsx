import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import { signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

const NavbarAccount = () => {
  const [isDropdownMenuOpen, setDropdownMenuOpen] = useState<boolean>(false)
  const accountRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const { t } = useTranslation('common')
  const [session] = useSession()
  const imagePath: any = session?.user?.profileImagePath || '#'
  const accountName: any = session?.user?.username || ''

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent) => {
      const isFocused: boolean | undefined = accountRef.current?.contains(event.target as Node)

      if (!isFocused) {
        setDropdownMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleMouseClick)

    return () => {
      document.removeEventListener('mousedown', handleMouseClick)
    }
  }, [])

  const handleAvatarClick = () => {
    setDropdownMenuOpen((prevState) => !prevState)
  }

  const renderDropdown = () => {
    const handleProfileClick = () => {
      const { id }: any = session?.user
      router.push({ pathname: `/account`, query: { id } })
    }

    const handleSignOut = () => {
      signOut()
    }

    return isDropdownMenuOpen ? (
      <ul className="dropdown__menu">
        <li className="dropdown__menu-item" onClick={handleProfileClick}>
          <span className="dropdown__label">{t('profile')}</span>
        </li>
        <li className="dropdown__menu-item" onClick={handleSignOut}>
          <span className="dropdown__label">{t('signOut')}</span>
        </li>
      </ul>
    ) : (
      <></>
    )
  }

  const renderAvatarLink = () => (
    <>
      <div className="navbar__avatar" onClick={handleAvatarClick}>
        <img className="navbar__image" src={imagePath} alt="avatar" />
        <span className="navbar__label">{accountName}</span>
      </div>
      {renderDropdown()}
    </>
  )

  const renderAuthenticationLink = () => (
    <>
      <Link href={'/sign-in'}>
        <a className="navbar__link navbar__link--secondary">{t('signIn')}</a>
      </Link>
      <Link href={'/sign-up'}>
        <a className="navbar__link navbar__link--primary">{t('signUp')}</a>
      </Link>
    </>
  )

  return (
    <div className="navbar__account" ref={accountRef}>
      {session ? renderAvatarLink() : renderAuthenticationLink()}
    </div>
  )
}

export default NavbarAccount
