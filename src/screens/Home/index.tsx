import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Sidebar />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
