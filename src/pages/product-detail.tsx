import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductView from '../components/ProductView'

const ProductDetail = () => (
  <div className="layout-product-detail">
    <header>
      <Navbar />
    </header>
    <main>
      <ProductView />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default ProductDetail
