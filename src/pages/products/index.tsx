import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ProductList from '../../components/ProductList'

const Products = () => (
  <div className="layout-products">
    <header>
      <Navbar />
    </header>
    <aside>
      <Sidebar />
    </aside>
    <main>
      <ProductList />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Products
