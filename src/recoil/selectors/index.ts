import { selector } from 'recoil'
import { productListState, priceRangeState, shirtCategoryState, footwearCategoryState } from '../atoms'

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
      let filteredList = [...productList]

      if (category.length > 0) {
        filteredList = productList.filter((product: any) => category.includes(product.category))
      }

      if (priceRange.length > 0) {
        const [minPrice, maxPrice] = priceRange
        filteredList = productList.filter((product: any) => product.price >= minPrice && product.price <= maxPrice)
      }

      return filteredList
    }
  }
})
