import React from 'react';

export default function HomeSearchSection() {
  const handleSearchClick = () => {};

  return (
    <section className="home-section">
      <header className="home-section__header">
        <h2 className="home-section__title">Search section</h2>
        <p className="home-section__description">This is a search section</p>
        <button className="home-search-tab__button" onClick={handleSearchClick}>
          Search
        </button>
      </header>
    </section>
  );
}
