import React from 'react'

const Sidebar = () => {
  const renderCategorySection = () => (
    <section className="sidebar__category">
      <header className="sidebar__category-title">Category</header>
      <input className="sidebar__checkbox" type="checkbox"></input>
      <label> Men's clothing</label>
    </section>
  )

  const renderColorSection = () => <div className="sidebar__color"></div>

  const renderSizeSection = () => <div className="sidebar__size"></div>

  const renderPriceRange = () => <div className="sidebar__price-range"></div>

  return <div className="sidebar">{renderCategorySection()}</div>
}

export default Sidebar
