import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const NewReleaseBanner = () => {
  const { t } = useTranslation('home')
  const Header = (props) => <h2 className="release-banner__header" {...props} />

  const renderIntroductionHeader = () => (
    <Trans
      i18nKey={t('releaseSectionHeader')}
      components={[<Header />, <br />]}
    />
  )

  return (
      <div className="release-banner">
        {renderIntroductionHeader()}
        <p className="release-banner__description">
          {t('releaseSectionDescription')}
        </p>
      </div>
  )
}

export default NewReleaseBanner
