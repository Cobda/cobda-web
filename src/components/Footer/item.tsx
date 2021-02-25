import React from 'react'
import Link from 'next/link'
import { ContextType } from '../../enum/context-type'

interface FooterItem {
  readonly label: string
  readonly href?: string
  readonly context?: ContextType
}

const FooterItem = ({ label, href, context }: FooterItem) => {
  const renderListItem = () => {
    const linkClassName: string =
      context === ContextType.Helpline
        ? 'footer__link footer__link--helpline'
        : 'footer__link'

    return context === ContextType.Title ? (
      <h3 className="footer__list-title">{label}</h3>
    ) : (
      <Link href={href || ''}>
        <a className={linkClassName}>{label}</a>
      </Link>
    )
  }

  return <li className="footer__list-item">{renderListItem()}</li>
}

export default FooterItem
