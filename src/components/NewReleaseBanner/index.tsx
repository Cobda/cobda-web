import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const NewReleaseBanner = () => {
  const { t } = useTranslation('home')
  const Header = (props) => <h2 className="new-release-banner__header" {...props} />

  const renderIntroductionHeader = () => (
    <Trans
      i18nKey={t('newReleaseSectionHeader')}
      components={[<Header />, <br />]}
    />
  )

  return (
      <div className="new-release-banner">
        {renderIntroductionHeader()}
        <p className="new-release-banner__description">
          {t('newReleaseSectionDescription')}
        </p>
      </div>
  )
}

export default NewReleaseBanner
