import React from 'react';

export default function HomeSearchSection() {
  const router = useRouter();

  const handleSearchClick = () => {
    router.push("/product-list");
  };

  return (
    <section className="home-section">
      <header className="home-section__header">
        <h2 className="home-section__title">Sample 1</h2>
        <p className="home-section__description">
          This is a sample description
        </p>
      </header>
      <div className="home-search">
        <button className="home-search__button" onClick={handleSearchClick}>
          <div className="home-search__text">Search</div>
        </button>
      </div>
    </section>
  );
}
