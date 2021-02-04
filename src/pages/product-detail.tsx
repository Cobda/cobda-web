import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ProductDetail = () => (
  <div className="layout-product-detail">
    <header>
      <Navbar />
    </header>
    <main>
      <div className="content-1">
        <div className="product-detail-section__image-container">
          <div className="product-detail-section__image">Sample Picture</div>
        </div>
      </div>
      <div className="content-2">
        <header className="product-detail-section__header">
          <h2 className="product-detail-section__title">Shoe Title</h2>
        </header>
      </div>
      <div className="content-3">
      <header className="product-detail__description-container">
        <h2 className="product-detail__description-text">
          Product description
        </h2>
      </header>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default ProductDetail
