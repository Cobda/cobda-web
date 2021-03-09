import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const NewReleaseBanner = () => {
  const { t } = useTranslation('home')
  const title = [<h2 className="new-release-banner__title" />, <br />]

  return (
    <div className="new-release-banner">
      <header className="new-release-banner__header">
        <Trans i18nKey={t('newReleaseSectionTitle')} components={title} />
        <p className="new-release-banner__description">
          {t('newReleaseSectionDescription')}
        </p>
      </header>
    </div>
  )
}

export default NewReleaseBanner
