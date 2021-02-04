import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductDetailComponent from '../components/ProductDetail'

const ProductDetail = () => (
  <div className="layout-product-detail">
    <header>
      <Navbar />
    </header>
    <main>
      <ProductDetailComponent/>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default ProductDetail
