import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Meta from '../components/Meta'
import ProductRegistrationForm from '../components/ProductRegistrationForm'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const ProductRegistration = () => {
  // TODO: Fix session bugs in production, then uncomment these
  // const [session]: any = useSession()
  // const router = useRouter()

  // useEffect(() => {
  //   if (!session) {
  //     router.push('/sign-in')
  //   }
  // }, [])

  return (
    <div className="layout-product-registration">
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
}

export default ProductRegistration
