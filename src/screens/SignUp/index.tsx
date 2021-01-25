import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './styles.scss';

export default function SignUp() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="sign-up">
        <SignUpForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
