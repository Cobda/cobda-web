import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Link from 'next/link'

interface NewReleaseItem {
  leftContent?: boolean
}

const NewReleaseItem = ({ leftContent }: NewReleaseItem) => {
  const { t } = useTranslation('home')
  const Header = (props) => <h2 className="new-release-item__header" {...props} />

  const renderIntroductionHeader = () => (
    <Trans
      i18nKey={t('newReleaseItemSectionHeader')}
      components={[<Header />, <br />]}
    />
  )

  return leftContent ? (
    <div className="new-release-item">
      <div className="new-release-item__content">
        {renderIntroductionHeader()}
        <h2 className="new-release-item__description">{t('newReleaseItemSectionDescription')}</h2>
        <h2 className="new-release-item__price">$120.00</h2>
        <Link href="">
          <a className="new-release-item__product">{t('newReleaseItemSectionProduct')}</a>
        </Link>
      </div>
      <div className="new-release-item__media">
        <Link href="/">
          <a className="new-release-item__link">
            <figure className="new-release-item__image-container">
              <img
                src="/images/nike-running.jpg"
                alt="Sneaker running shoe by Shane Aldendorff from Pexels"
                className="new-release-item__image"
              />
            </figure>
          </a>
        </Link>
      </div>
    </div>
  ) : (
    <div className="new-release-item">
      <div className="new-release-item__media">
        <Link href="/">
          <a className="new-release-item__link">
            <figure className="new-release-item__image-container">
              <img
                src="/images/nike-sneaker.jpg"
                alt="Sneaker running shoe by VisualHunt.com
                Nike sneaker shoe by Grailify from Pexels"
                className="new-release-item__image"
              />
            </figure>
          </a>
        </Link>
      </div>
      <div className="new-release-item__content new-release-item--grey-background">
        {renderIntroductionHeader()}
        <h2 className="new-release-item__description">{t('newReleaseItemSectionDescription')}</h2>
        <h2 className="new-release-item__price">$120.00</h2>
        <Link href="">
          <a className="new-release-item__product">{t('newReleaseItemSectionProduct')}</a>
        </Link>
      </div>
    </div>
  )
}

export default NewReleaseItem
