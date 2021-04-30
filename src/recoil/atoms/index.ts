import { atom } from 'recoil'

export const productState = atom({
  key: 'productState',
  default: {}
})

export const productListState = atom({
  key: 'productListState',
  default: []
})

export const footwearCategoryState = atom({
  key: 'footwearCategoryState',
  default: true
})

export const shirtCategoryState = atom({
  key: 'shirtCategoryState',
  default: true
})

export const priceRangeState = atom({
  key: 'priceRangeState',
  default: [] as number[]
})

export const sortByFilterState = atom({
  key: 'sortByFilterState',
  default: ''
})
