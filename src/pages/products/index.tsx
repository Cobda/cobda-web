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
import { productListState } from '../../recoil/atoms'

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

export const getServerSideProps = async () =>
  axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
    .then((product) => {
      return {
        props: {
          products: product.data
        }
      }
    })
    .catch(() => {
      return { props: {} }
    })

export default Products
