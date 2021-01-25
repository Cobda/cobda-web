import React from 'react';
import { useEffect } from 'react';
import Footer from '../../components/Footer';
import HomeSection from '../../components/HomeSection';
import Navbar from '../../components/Navbar';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('layout-home');
  }, []);
  
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HomeSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
