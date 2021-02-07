import Footer from '../components/Footer'
import SignInForm from '../components/SignInForm'
import Navbar from '../components/Navbar'

const SignIn = () => (
  <div className="layout-authentication">
    <header>
      <Navbar />
    </header>
    <main>
      <SignInForm />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default SignIn
