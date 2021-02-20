import React from 'react'
import HomeCategoryItem from './Item'

const HomeCategory = () => {
  return (
    <ul className="home-category">
      <HomeCategoryItem
        imagePath={'/images/yeezy-380.jpg'}
        alternate={'Adidas Yeezy 380 from Pexels by @ox-street-3848035'}
        caption={'Yeezys'}
      />
      <HomeCategoryItem
        imagePath={'/images/blue-nike-jordan.jpg'}
        alternate={'Nike Jordan from Pexels by @desertedinurban'}
        caption={'Jordans'}
      />
      <HomeCategoryItem
        imagePath={'/images/rolling-stone-shirt.jpg'}
        alternate={'One of our Authors vintage t-shirt collection'}
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
