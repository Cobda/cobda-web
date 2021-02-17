import React from 'react'

const AccountProduct = () => {
  return (
    <div className="account-product">
      <header className="account-product__header">
        <ul className="account-product__list">
          <li className="account-product__list-item">
            <a className="account-product__link account-product__link--primary">
              Available Products
            </a>
          </li>
          <li className="account-product__list-item">
            <a className="account-product__link account-product__link--secondary">
              Out of Stock Products
            </a>
          </li>
        </ul>
      </header>
      {/* TODO: Render carousel for product items here */}
    </div>
  )
}

export default AccountProduct
