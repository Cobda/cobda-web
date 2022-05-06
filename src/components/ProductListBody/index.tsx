import React from 'react'
import ProductCard from '../ProductCard'
import { useRecoilValue } from 'recoil'
import { filteredProductListState } from '../../recoil/selectors'
import EmptyResult from '../EmptyResult'

const ProductListBody = () => {
  const productList = useRecoilValue(filteredProductListState)

  const renderProductList = () =>
    productList?.length ? productList.map((product) => <ProductCard product={product} />) : <EmptyResult />

  return <section className="product-list">{renderProductList()}</section>
}

export default ProductListBody
