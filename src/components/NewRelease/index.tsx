import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Link from 'next/link'

interface NewReleaseItem {
  leftContent?: boolean
}

const NewReleaseItem = ({ leftContent }: NewReleaseItem) => {
  const { t } = useTranslation('home')
  const Header = (props) => <h2 className="release-item__header" {...props} />

  const renderIntroductionHeader = () => (
    <Trans
      i18nKey={t('releaseItemSectionHeader')}
      components={[<Header />, <br />]}
    />
  )

  return leftContent ? (
    <div className="release-item">
      <div className="release-item__content">
        {renderIntroductionHeader()}
        <h2 className="release-item__description">{t('releaseItemSectionDescription')}</h2>
        <h2 className="release-item__price">$120.00</h2>
        <Link href="">
          <a className="release-item__product">{t('releaseItemSectionProduct')}</a>
        </Link>
      </div>
      <div className="release-item__media">
        <Link href="/">
          <a className="release-item__link">
            <figure className="release-item__image-container">
              <img
                src="/images/nike-running.jpg"
                alt="Sneaker running shoe by Shane Aldendorff from Pexels"
                className="release-item__image"
              />
            </figure>
          </a>
        </Link>
      </div>
    </div>
  ) : (
    <div className="release-item">
      <div className="release-item__media">
        <Link href="/">
          <a className="release-item__link">
            <figure className="release-item__image-container">
              <img
                src="/images/nike-sneaker.jpg"
                alt="Sneaker running shoe by VisualHunt.com
                Nike sneaker shoe by Grailify from Pexels"
                className="release-item__image"
              />
            </figure>
          </a>
        </Link>
      </div>
      <div className="release-item__content release-item--grey-background">
        {renderIntroductionHeader()}
        <h2 className="release-item__description">{t('releaseItemSectionDescription')}</h2>
        <h2 className="release-item__price">$120.00</h2>
        <Link href="">
          <a className="release-item__product">{t('releaseItemSectionProduct')}</a>
        </Link>
      </div>
    </div>
  )
}

export default NewReleaseItem
