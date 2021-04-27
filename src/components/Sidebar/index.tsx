import React from 'react'
import useTranslation from 'next-translate/useTranslation'

const Sidebar = () => {
  const { t } = useTranslation('products')

  const renderCategoryItem = () => (
    <div className="sidebar__item">
      <div className="sidebar__item-group">
        <input className="sidebar__checkbox" type="checkbox"></input>
        <label className="sidebar__label">{t('shoe')}</label>
      </div>
      <div className="sidebar__item-group">
        <input className="sidebar__checkbox" type="checkbox"></input>
        <label className="sidebar__label">{t('shirt')}</label>
      </div>
    </div>
  )

  const renderPriceRangeItem = () => (
    <div className="sidebar__item">
      <div className="sidebar__item-group">
        <input className="sidebar__checkbox" type="checkbox"></input>
        <label className="sidebar__label">0 - 5000 {t('baht')}</label>
      </div>
      <div className="sidebar__item-group">
        <input className="sidebar__checkbox" type="checkbox"></input>
        <label className="sidebar__label">5000 - 10,000 {t('baht')}</label>
      </div>
      <div className="sidebar__item-group">
        <input className="sidebar__checkbox" type="checkbox"></input>
        <label className="sidebar__label">10,000 + {t('baht')}</label>
      </div>
    </div>
  )
  const renderCategorySection = () => (
    <section className="sidebar__filter">
      <header className="sidebar__title">{t('category')}</header>
      {renderCategoryItem()}
    </section>
  )

  const renderPriceRange = () => (
    <section className="sidebar__filter">
      <header className="sidebar__title">{t('priceRange')}</header>
      {renderPriceRangeItem()}
    </section>
  )

  return (
    <div className="sidebar">
      {renderCategorySection()}
      {renderPriceRange()}
    </div>
  )
}

export default Sidebar
