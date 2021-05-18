import React from 'react'
import HomeCategoryItem from './Item'
import Router from 'next/router'

const HomeCategory = () => {
  const handleClick = () => {
    Router.push('/products')
  }

  return (
    <ul className="home-category">
      <HomeCategoryItem
        imagePath={'/images/yeezys.jpg'}
        alternate={'Adidas Yeezys'}
        caption={'Yeezys'}
        onClick={handleClick}
      />
      <HomeCategoryItem
        imagePath={'/images/blue-nike-jordan.jpg'}
        alternate={'Nike Jordan from Pexels by @desertedinurban'}
        caption={'Jordans'}
        onClick={handleClick}
      />
      <HomeCategoryItem
        imagePath={'/images/a-guy-in-black-shirt.jpg'}
        alternate={'A guy in black t-shirt.'}
        caption={'Vintage'}
        onClick={handleClick}
      />
      <HomeCategoryItem
        imagePath={'/images/nike-jordan-off-white.jpg'}
        alternate={'Nike Air Jordan X Off White from Pexels by @introspectivedsgn'}
        caption={'HypeBeast'}
        onClick={handleClick}
      />
    </ul>
  )
}

export default HomeCategory
