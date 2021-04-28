import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar'
import ProductContent from '../../components/ProductContent'
import axios from 'axios'
import { useSetRecoilState } from 'recoil'
import { productState } from '../../recoil/atoms/product'

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
  const basePath = 'http://localhost:3000'
  const rawProduct = await axios.get(`${basePath}/api/products/${productId}`)

  console.log('raw data: ', rawProduct)

  if (rawProduct) {
    const product = rawProduct.data
    console.log(product)

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
