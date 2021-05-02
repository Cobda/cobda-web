import React from 'react'
import ProductCard from '../ProductCard'
import { useRecoilValue } from 'recoil'
import { filteredProductListState } from '../../recoil/selectors'

const ProductListBody = () => {
  const productList = useRecoilValue(filteredProductListState)

  const renderProductList = () => productList?.map((product) => <ProductCard product={product} />)

  return <section className="product-list">{renderProductList()}</section>
}

export default ProductListBody
