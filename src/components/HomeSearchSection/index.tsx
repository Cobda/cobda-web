import React from 'react'
import { useRouter } from 'next/router'

export default function HomeSearchSection() {
  const router = useRouter()

  const handleSearchClick = () => {
    router.push('/products')
  }

  return (
    <section className="home-search-section">
      {/* <header className="home-search-section__header"> */}
        <div className="home-search-section__image"></div>
        <h2 className="home-search-section__title">Cobda, streetwear community</h2>
        <p className="home-search-section__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero
        erat, porttitor mattis turpis eu, fermentum porttitor elit. Integer
        auctor orci at ligula cursus pellentesque. Pellentesque in eleifend
        ex. Curabitur bibendum orci vel magna tristique egestas. Aliquam id
        libero augue. Proin rutrum viverra ex, ac ornare velit. Etiam accumsan
        massa a ipsum interdum placerat. Vestibulum consequat ligula id diam
        commodo commodo. Donec tincidunt ipsum dui, eget suscipit lorem
        maximus sed. Integer nec diam quis erat luctus ultrices sed quis eros.
        </p>
      {/* </header> */}
      <div className="home-search-box">
        <button className="home-search-box__button" onClick={handleSearchClick}>
          <span className="home-search-box__text">Search</span>
        </button>
      </div>
    </section>
  )
}
