import React from 'react'
import Link from 'next/link'

const Footer = () => (
  <div className="footer">
    Footer
    <div className="footer__item">
      <Link href="/about-us">
        <a className="footer__link">About Us</a>
      </Link>
    </div>
  </div>
)

export default Footer
