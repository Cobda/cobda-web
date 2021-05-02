import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const EmptyResult = () => {
  const { t } = useTranslation('products')

  return (
    <figure className="empty-result">
      <img className="empty-result__image" src="/icons/search-icon.svg" alt="" />
      <figcaption className="empty-result__caption">
        <h2 className="empty-result__title">{t('emptyResult')}</h2>
        <h2 className="empty-result__subtitle">{t('emptyResultHint')}</h2>
      </figcaption>
    </figure>
  )
}

export default EmptyResult
