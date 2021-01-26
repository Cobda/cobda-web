import Footer from "../components/Footer";
import HomeSection from "../components/HomeSection";
import Navbar from "../components/Navbar";

const Home = () => (
  <div className='layout-home'>
    <header>
      <Navbar />
    </header>
    <main>
      <HomeSection />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Home;
