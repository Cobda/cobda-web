import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Dropdown, { Option } from 'react-dropdown'

const Sidebar = () => {
  const { t } = useTranslation('products')
  const [selectedPriceRange, setselectedPriceRange] = useState<string>('')
  const priceOption: string[] = ['lowestPriceRange', 'middlePriceRange', 'highestPriceRange'].map((option) => t(option))

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
  const renderPriceRangeItem = () => {
    const handleDropdownChange = (setOption: (option: string) => void) => (selectedOption: Option) => {
      setOption(selectedOption.value)
    }

    return (
      <div className="sidebar__item">
        <Dropdown
          className="sidebar__dropdown-option"
          options={priceOption}
          value={selectedPriceRange}
          placeholder="-"
          onChange={handleDropdownChange(setselectedPriceRange)}
        />
      </div>
    )
  }
  
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
