import axios from 'axios'
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import Footer from '../components/Footer'
import HomeSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
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

export default Home
