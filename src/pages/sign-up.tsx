import Footer from '../components/Footer'
import SignUpForm from '../components/SignUpForm'
import Navbar from '../components/Navbar'
import Meta from '../components/Meta'

const SignUp = () => (
  <div className="layout-authentication">
    <Meta title="Registration | Cobda"/>
    <header>
      <Navbar />
    </header>
    <main>
      <SignUpForm />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default SignUp
