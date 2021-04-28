import { atom } from 'recoil'

export const productState = atom({
  key: 'productState',
  default: {}
})

export const productListState = atom({
  key: 'productListState',
  default: []
})

export const productCategoryState = atom({
  key: 'productCategoryState',
  default: ''
})

export const priceRangeState = atom({
  key: 'priceRangeState',
  default: []
})
