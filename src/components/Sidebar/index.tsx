import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Dropdown, { Option } from 'react-dropdown'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { footwearCategoryState, priceRangeState, shirtCategoryState } from '../../recoil/atoms'

const Sidebar = () => {
  const { t } = useTranslation('products')
  const setPriceRangeState = useSetRecoilState(priceRangeState)
  const [isFootwearChecked, setFootwearChecked] = useRecoilState(footwearCategoryState)
  const [isShirtChecked, setShirtChecked] = useRecoilState(shirtCategoryState)
  const [selectedPriceRange, setselectedPriceRange] = useState<string>('')
  const priceOption: string[] = ['lowestPriceRange', 'middlePriceRange', 'highestPriceRange'].map((option) => t(option))

  const renderCategoryItem = () => {
    const handleInputChange = (setCheckboxValue: (isChecked: boolean) => void) => (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setCheckboxValue(event.target.checked)
    }

    return (
      <div className="sidebar__item">
        <div className="sidebar__item-group">
          <input
            className="sidebar__checkbox"
            type="checkbox"
            checked={isFootwearChecked}
            onChange={handleInputChange(setFootwearChecked)}
          />
          <label className="sidebar__label">{t('footwear')}</label>
        </div>
        <div className="sidebar__item-group">
          <input
            className="sidebar__checkbox"
            type="checkbox"
            checked={isShirtChecked}
            onChange={handleInputChange(setShirtChecked)}
          />
          <label className="sidebar__label">{t('shirt')}</label>
        </div>
      </div>
    )
  }

  const renderPriceRangeItem = () => {
    const handleDropdownChange = (setOption: (option: string) => void) => (selectedOption: Option) => {
      setOption(selectedOption.value)
      const priceRange: string[] = selectedOption && selectedOption.value.split(' ')
      const minPrice: string = priceRange && priceRange[0].replace(',', '')
      const maxPrice: string = priceRange && priceRange[2].replace(',', '')
      setPriceRangeState([parseInt(minPrice), parseInt(maxPrice)])
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
