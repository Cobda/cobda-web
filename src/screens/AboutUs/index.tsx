import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './styles.scss';

export default function AboutUs() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Sidebar/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
