import React from 'react'

function ProductDetailComponent() {
  return (
    <section className="product-detail">
      <div className="product-detail__content-image">
        <div className="product-detail__image-container">
          <div className="product-detail__image">
            <img src="#" alt="product-image" />
          </div>
        </div>
      </div>
      <div className="product-detail__content-info">
        <header className="product-detail__header">
          <h2 className="product-detail-section__title">Shoe Title</h2>
        </header>
      </div>
      <div className="product-detail__content-description">
        <header className="product-detail__header">
          <h2 className="product-detail__description-text">
            Product description
          </h2>
        </header>
      </div>
    </section>
  )
}

export default ProductDetailComponent
