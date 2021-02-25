import React from 'react'
import Link from 'next/link'

interface FooterItem {
  readonly label: string
  readonly href?: string
  readonly isTitleText?: boolean
  readonly isEmergencyText?: boolean
}

const FooterItem = ({ label, href, isTitleText, isEmergencyText }: FooterItem) => {
  
  const linkClassName: string = isEmergencyText
    ? 'footer__link footer__link--danger'
    : 'footer__link'

  const renderListItem = () =>
    isTitleText ? (
      <h3 className="footer__list-title">{label}</h3>
    ) : (
      <Link href={href || ''}>
        <a className={linkClassName}>{label}</a>
      </Link>
    )

  return (
    <li className="footer__list-item">
      {renderListItem()}
    </li>
  )
}

export default FooterItem
