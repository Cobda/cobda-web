import Footer from '../../components/Footer'
import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar'
import ProductContent from '../../components/ProductContent'

const ProductView = () => (
  <div className="layout-product-view">
    <Meta title="Product View | Cobda"/>
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
