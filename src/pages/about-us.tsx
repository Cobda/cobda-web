import React from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'

const AboutUs = () => (
  <div className="layout-about-us">
    <Meta title="About Us | Cobda" />
    <header>
      <Navbar />
    </header>
    <main>
      <div className="about-us-introduction-section">
        <h2 className="about-us-introduction-section__title-first">
          WE ARE COBDA,
        </h2>
        <h2 className="about-us-introduction-section__title-second">
          THE PLACE WHERE BUYER AND SELLER MEETS.
        </h2>
        <div className="about-us-introduction-section__decoration-box-first"></div>
        <div className="about-us-introduction-section__image"></div>
        <div className="about-us-introduction-section__decoration-box-second"></div>
        <p className="about-us-introduction-section__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus
          ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet
          eget eros. Sed laoreet posuere velit sit amet varius. Nulla eget purus
          non erat fringilla sodales vel a nulla. Cras sit amet tempus risus.
          Fusce dignissim blandit justo, eget elementum risus tristique a. Nunc
          fringilla lacus lacus, sit amet accumsan est pulvinar non. Praesent
          tristique enim lorem. 
        </p>
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default AboutUs
