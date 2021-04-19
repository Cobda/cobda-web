import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Meta from '../components/Meta'
import ProductRegistrationForm from '../components/ProductRegistrationForm'

const ProductRegistration = () => (
  // TODO: Change name to be more meaningful
  <div className="layout-authentication">
    <Meta title="Product Registration | Cobda" />
    <header>
      <Navbar />
    </header>
    <main>
      <ProductRegistrationForm />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default ProductRegistration
