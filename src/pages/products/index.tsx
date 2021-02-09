import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import ProductList from '../../components/ProductList'
import Meta from '../../components/Meta'

const Products = () => (
  <div className="layout-products">
    <Meta title="Products | Cobda"/>
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
