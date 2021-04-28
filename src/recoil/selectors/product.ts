import { selector } from 'recoil'
import { productListState, productCategoryState, priceRangeState } from '../atoms/product'

export const filteredProductListState = selector({
  key: 'filteredProductListState',
  get: ({ get }) => {
    const productList = get(productListState)

    if (productList) {
      const category = get(productCategoryState)
      const priceRange = get(priceRangeState)
      let filteredList = [...productList]

      if (category) {
        filteredList = productList.filter((product: any) => product.category === category)
      }

      if (priceRange.length > 0) {
        const [minPrice, maxPrice] = priceRange
        filteredList = productList.filter((product: any) => product.price >= minPrice && product.price <= maxPrice)
      }

      return filteredList
    }
  }
})
