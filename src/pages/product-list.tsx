import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const ProductList = () => (
  <div className="layout-product-list">
    <header>
      <Navbar />
    </header>
    <main>
      <Sidebar />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default ProductList
