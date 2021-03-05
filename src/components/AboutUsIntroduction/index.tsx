import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

const AboutUsIntroduction = () => {
  const { t } = useTranslation('about-us')
  const titles = [<h1 className="about-us-introduction__title" />, <br />]

  const renderIntroductionDescription = () => (
    <p className="about-us-introduction__description">
      {t('introductionSectionDescription')}
    </p>
  )

  return (
    <section className="about-us-section">
      <div className="about-us-introduction about-us-introduction--background">
        <Trans i18nKey={t('introductionSectionTitle')} components={titles} />
        {renderIntroductionDescription()}
      </div>
    </section>
  )
}

export default AboutUsIntroduction
