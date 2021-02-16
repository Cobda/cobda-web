import React from 'react'
import ProductAvailable from './ProductAvailable'
import ProductReview from './ProductReview'

const AccountContent = () => {
  return (
    <section className="account-content">
      <ProductAvailable />
      <ProductReview />
    </section>
  )
}

export default AccountContent
