import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

const AboutUs = () => (
  <div className="layout-about-us">
    <Meta title="About Us | Cobda"/>
    <header>
      <Navbar />
    </header>
    <main>
      <div>About Us</div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default AboutUs
