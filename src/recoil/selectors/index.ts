import { selector } from 'recoil'
import {
  productListState,
  priceRangeState,
  shirtCategoryState,
  footwearCategoryState,
  sortByFilterState
} from '../atoms'

export const productCategoryState = selector({
  key: 'productCategoryState',
  get: ({ get }) => {
    const footwear = get(footwearCategoryState) ? 'Footwear' : ''
    const shirt = get(shirtCategoryState) ? 'Shirt' : ''

    return [footwear, shirt]
  }
})

export const filteredProductListState = selector({
  key: 'filteredProductListState',
  get: ({ get }) => {
    const productList = get(productListState)

    if (productList) {
      const category = get(productCategoryState)
      const priceRange = get(priceRangeState)
      const sortByFilter = get(sortByFilterState)
      let filteredList = [...productList]

      if (category.length > 0) {
        filteredList = productList.filter((product: any) => category.includes(product.category))
      }

      if (priceRange.length > 0) {
        const [minPrice, maxPrice] = priceRange
        filteredList = productList.filter((product: any) => product.price >= minPrice && product.price <= maxPrice)
      }

      if (sortByFilter === 'H') {
        filteredList.sort((first: any, second: any) => second.price - first.price)
      } else if (sortByFilter === 'L') {
        filteredList.sort((first: any, second: any) => first.price - second.price)
      }

      return filteredList
    }
  }
})
