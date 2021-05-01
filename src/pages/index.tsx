import axios from 'axios'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import { BASE_URL } from '../constant'
import { productListState } from '../recoil/atoms'

const Home = ({ products }: any) => {
  const setProdutListState = useSetRecoilState(productListState)

  useEffect(() => {
    setProdutListState(products)
  }, [])

  return (
    <div className="layout-home">
      <header>
        <Navbar />
      </header>
      <main>
        <HomeSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  const rawProducts = await axios.get(`${BASE_URL}/api/products`)

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

export default Home
