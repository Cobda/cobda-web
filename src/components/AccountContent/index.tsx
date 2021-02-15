import React from 'react'
import ProductAvailable from './ProductAvailable'
import Review from './Review'

const AccountContent = () => {
  return (
    <section className="account-content">
      <ProductAvailable />
      <Review />
    </section>
  )
}

export default AccountContent
