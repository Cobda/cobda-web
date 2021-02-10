import React from 'react'
import Footer from '../components/Footer'
import SignUpSuccessForm from '../components/SignUpSuccessForm'
import Navbar from '../components/Navbar'
import Meta from '../components/Meta'

const SignUpSuccess = () => (
  <div className="layout-authentication">
    <Meta title="SignUp Success | Cobda" />
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
