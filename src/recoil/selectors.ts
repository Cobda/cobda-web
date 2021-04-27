import { selector } from 'recoil'
import { productListState, productCategoryState, priceRangeState } from './atoms'

export const filteredProductListState = selector({
  key: 'filteredProductListState',
  get: ({ get }) => {
    const productList = get(productListState)
    const category = get(productCategoryState)
    const priceRange = get(priceRangeState)
    let filteredList: any[] = []

    if (category) {
      filteredList = productList.filter((product: any) => product.category === category)
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange
      filteredList = productList.filter((product: any) => product.price >= minPrice && product.price <= maxPrice)
    }

    return filteredList
  }
})
