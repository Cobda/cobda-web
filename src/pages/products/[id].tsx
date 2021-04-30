import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar'
import ProductContent from '../../components/ProductContent'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { productState } from '../../recoil/atoms'
import { BASE_URL } from '../../constant'

const ProductView = ({ product }: any) => {
  const setProductState = useSetRecoilState(productState)

  useEffect(() => {
    setProductState(product)
  }, [])

  return (
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
}

export const getServerSideProps = async (context: any) => {
  const productId = context.query.id
  const rawProduct = await axios.get(`${BASE_URL}/api/products/${productId}`)

  if (rawProduct) {
    const product = rawProduct.data

    return {
      props: {
        product
      }
    }
  } else {
    return { isAllow: false }
  }
}

export default ProductView
