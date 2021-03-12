import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const OurGoalBox = () => {
  const { t } = useTranslation('about-us')

  return (
    <div className="our-goal-box">
      <h1 className="our-goal-box__title">{t('goalSectionTitle')}</h1>
      <p className="our-goal-box__description">{t('goalSectionDescription')}</p>
    </div>
  )
}

export default OurGoalBox
