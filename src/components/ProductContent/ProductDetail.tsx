import React from 'react'

interface ProductDetailInterface {
  readonly title: string
  readonly rating: Number
  readonly price: Number
  readonly color: string
  readonly size: string
  readonly time: string
}

let exampleProduct: ProductDetailInterface = {
  title: 'Men Running Shoes Black Trainer Sport Sneaker',
  rating: 4.8,
  price: 560,
  color: 'Black',
  size: 'S,M,L',
  time: '30 minutes'
}

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <header className="product-detail__header">
        <h2 className="product-detail__title">{exampleProduct.title}</h2>
      </header>
      <p className="product-detail__description">
        <div className="product-detail__rating">
          <div className="product-detail__rating__text">{exampleProduct.rating}</div>
          <div className="product-detail__rating__icon" />
        </div>
        <div className="product-detail__key">Price: {exampleProduct.price} Baht</div>
        <div className="product-detail__key">Color: {exampleProduct.color}</div>
        {/* Split size with buttons */}
        <div className="product-detail__key">
          Size:
          <div className="product-detail__size-button"></div>
          {exampleProduct.size}
        </div>
        <div className="product-detail__seller">
          <div className="product-detail__seller__profile-picture">Picture</div>
          <div className="product-detail__seller__username">Name</div>
          <div className="product-detail__time-posted">posted this {exampleProduct.time} ago</div>
        </div>
        <div className="product-detail__delivery-option">
          Delivery Options
          <br />
          <div className="product-detail__delivery-option-dropdown">Drop down</div>
        </div>
      </p>
    </div>
  )
}

export default ProductDetail
