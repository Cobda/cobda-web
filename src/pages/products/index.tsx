import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ProductListHeader from '../../components/ProductListHeader'
import ProductListBody from '../../components/ProductListBody'
import ProductListFooter from '../../components/ProductListFooter'
import Meta from '../../components/Meta'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { productListState } from '../../recoil/atoms/product'

const Products = ({ products }: any) => {
  const setProdutListState = useSetRecoilState(productListState)

  useEffect(() => {
    setProdutListState(products)
  }, [])

  return (
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
}

export const getServerSideProps = async () => {
  const basePath = 'http://localhost:3000'
  const rawProducts = await axios.get(`${basePath}/api/products`)

  console.log('raw data: ', rawProducts)

  if (rawProducts) {
    const products = rawProducts.data

    return {
      props: {
        products
      }
    }
  } else {
    return {}
  }
}

export default Products
