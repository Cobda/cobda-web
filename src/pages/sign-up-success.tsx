import Footer from '../components/Footer'
import SignUpSuccessForm from '../components/SignUpSuccessForm'
import Navbar from '../components/Navbar'

const SignUpSuccess = () => (
  <div className="layout-authentication">
    <header>
      <Navbar />
    </header>
    <main>
      <SignUpSuccessForm />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default SignUpSuccess
