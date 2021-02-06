import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductContent from '../components/ProductContent'

const ProductView = () => (
  <div className="layout-product-view">
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

export default ProductView
