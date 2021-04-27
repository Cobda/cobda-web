import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const OurGoalBox = () => {
  const { t } = useTranslation('about-us')
  const description = [<p className="our-goal__description" />, <b />]

  return (
    <div className="our-goal">
      <h1 className="our-goal__title">{t('goalSectionTitle')}</h1>
      <Trans i18nKey={t('goalSectionDescription')} components={description} />
    </div>
  )
}

export default OurGoalBox
