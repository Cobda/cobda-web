import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ProductListHeader from '../../components/ProductListHeader'
import ProductListBody from '../../components/ProductListBody'
import ProductListFooter from '../../components/ProductListFooter'
import Meta from '../../components/Meta'

const Products = () => (
  <div className="layout-products">
    {/* TODO: Title should be a user search result or a category. */}
    <Meta title="Products | Cobda" />
    <header>
      <Navbar />
    </header>
    <aside>
      <Sidebar />
    </aside>
    <main>
      <ProductListHeader />
      <ProductListBody />
      {/* TODO: Further implement for view more products */}
      {/* <ProductListFooter />  */}
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Products
