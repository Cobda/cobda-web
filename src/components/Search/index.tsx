import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

export default function HomePageSearch() {
  return (
    <div className="search-container">
      <Link to="/product-list" className="btn btn-search">Search</Link>
    </div>
  );
}


