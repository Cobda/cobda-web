import React from 'react'

const Hamburger = () => {
  return (
    <div className="hamburger">
      <input type="checkbox" className="hamburger__input" />
      <span></span>
      <span></span>
      <span></span>
      <ul className="hamburger__menu">
        <li className="hamburger__menu-list">Mock up</li>
        <li className="hamburger__menu-list">Mock up</li>
        <li className="hamburger__menu-list">Mock up</li>
        <li className="hamburger__menu-list">Mock up</li>
        <li className="hamburger__menu-list">Mock up</li>
        <li className="hamburger__menu-list">Mock up</li>
      </ul>
    </div>
  )
}

export default Hamburger
