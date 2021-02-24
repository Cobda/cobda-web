import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../Navbar/Logo'
import FooterItem from './item'
import LanguageDropdown from '../LanguageDropdown'
import useTranslation from 'next-translate/useTranslation'

export enum ComponentType {
  Header,
  Footer
}

const Footer = () => {
  const { t } = useTranslation('common')

  const renderLogoColumn = () => (
    <div className="footer__logo-container">
      <Logo />
      <LanguageDropdown componentType={ComponentType.Footer} />
    </div>
  )

  const renderHelpColumn = () => (
    <ul className="footer__list">
      <FooterItem isTitleText label={t('helpCenter')} />
      {/* TODO: Add href when path is available */}
      <FooterItem href="" label={t('termsOfService')} />
      <FooterItem href="" label={t('privacyPolicy')} />
      <FooterItem isEmergencyText href="" label={t('emergencyLine')} />
    </ul>
  )

  const renderAboutColumn = () => (
    <ul className="footer__list">
      <FooterItem isTitleText label={t('about')} />
      <FooterItem href="/about-us" label={t('aboutUs')} />
    </ul>
  )

  const renderContactColumn = () => (
    <ul className="footer__list">
      <FooterItem isTitleText label={t('contactUs')} />
      <div className="footer__email-container">
        <Image src="/icons/email.svg" height={17} width={21} />
        {/* TODO: Redirect when path is available */}
        <FooterItem href="" label="cobda.dev@gmail.com" />
      </div>
    </ul>
  )

  return (
    <div className="footer">
      {renderLogoColumn()}
      {renderHelpColumn()}
      {renderAboutColumn()}
      {renderContactColumn()}
    </div>
  )
}

export default Footer
