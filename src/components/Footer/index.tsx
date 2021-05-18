import React from 'react'
import Image from 'next/image'
import Logo from '../Logo'
import FooterItem from './item'
import LanguageDropdown from '../LanguageDropdown'
import useTranslation from 'next-translate/useTranslation'
import { ComponentType } from '../../enum/component-type'
import { ContextType } from '../../enum/context-type'

const Footer = () => {
  const { t } = useTranslation('common')

  const renderLogoColumn = () => (
    <div className="footer__logo-container">
      <Logo />
      <LanguageDropdown parent={ComponentType.Footer} />
    </div>
  )

  const renderHelpColumn = () => (
    <ul className="footer__list">
      <FooterItem context={ContextType.Title} label={t('helpCenter')} />
      {/* TODO: Add href when path is available */}
      <FooterItem href="" label={t('termsOfService')} />
      <FooterItem href="" label={t('privacyPolicy')} />
      <FooterItem context={ContextType.Helpline} href="" label={t('helpline')} />
    </ul>
  )

  const renderAboutColumn = () => (
    <ul className="footer__list">
      <FooterItem context={ContextType.Title} label={t('about')} />
      <FooterItem href="/about-us" label={t('aboutUs')} />
    </ul>
  )

  const renderContactColumn = () => (
    <ul className="footer__list">
      <FooterItem context={ContextType.Title} label={t('contactUs')} />
      <div className="footer__email-container">
        <Image src="/icons/email.svg" alt="Email Icon" height={17} width={21} />
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
