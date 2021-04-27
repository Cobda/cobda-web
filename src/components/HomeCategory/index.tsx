import React from 'react'
import HomeCategoryItem from './Item'

const HomeCategory = () => {
  return (
    <ul className="home-category">
      <HomeCategoryItem
        imagePath={'/images/yeezys.jpg'}
        alternate={'Adidas Yeezys'}
        caption={'Yeezys'}
      />
      <HomeCategoryItem
        imagePath={'/images/blue-nike-jordan.jpg'}
        alternate={'Nike Jordan from Pexels by @desertedinurban'}
        caption={'Jordans'}
      />
      <HomeCategoryItem
        imagePath={'/images/a-guy-in-black-shirt.jpg'}
        alternate={'A guy in black t-shirt.'}
        caption={'Vintage'}
      />
      <HomeCategoryItem
        imagePath={'/images/nike-jordan-off-white.jpg'}
        alternate={'Nike Air Jordan X Off White from Pexels by @introspectivedsgn'}
        caption={'HypeBeast'}
      />
    </ul>
  )
}

export default HomeCategory
