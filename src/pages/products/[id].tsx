import React from 'react'
import Footer from '../../components/Footer'
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar'
import ProductContent from '../../components/ProductContent'

const ProductView = () => (
  <div className="layout-product-view">
    {/* TODO: Title should be specific for each product name */}
    <Meta title="Product View | Cobda" />
    <header>
      <Navbar />
    </header>
    <main>
      <ProductContent />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default ProductView
