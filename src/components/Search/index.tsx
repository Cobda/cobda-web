import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function HomePageSearch() {
  return (
    <div className="search">
      <Link to="/product-list" className="search__button">
        <div className="search__text">Search</div>
      </Link>
    </div>
  );
}


