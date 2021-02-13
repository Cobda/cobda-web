import React from 'react'
import AvailableProduct from './AvailableProduct'
import Review from './Review'

const AccountContent = () => {
  return (
    <section className="account-content">
      <div className="account-content__product">
        <AvailableProduct />
      </div>
      <div className="account-content__review">
        <Review />
      </div>
    </section>
  )
}

export default AccountContent
