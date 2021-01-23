import React from 'react';
import { Link } from 'react-router-dom'
import './styles.scss';

export default function Footer() {
  return (
    <div className="footer-container">
      Footer
      <div className="footer-item">
        <Link to="/about-us">About Us</Link>
      </div>
    </div>
  );
}
