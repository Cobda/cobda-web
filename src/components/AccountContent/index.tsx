import React from 'react'
import AvailableProduct from './AvailableProduct'
import Review from './Review'

const AccountContent = () => {
  return (
    <section className="account-content">
      <AvailableProduct />
      <Review />
    </section>
  )
}

export default AccountContent
