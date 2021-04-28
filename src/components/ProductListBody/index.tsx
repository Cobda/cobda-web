import React from 'react'
import ProductCard from '../ProductCard'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { filteredProductListState } from '../../recoil/selectors/product'
import { productListState } from '../../recoil/atoms/product'

const ProductListBody = () => {
  const productList = useRecoilValue(filteredProductListState)
  // const articles = new Array(20).fill(<ProductCard product={{id: 1, name: 'test'}}/>)

  const { t } = useTranslation('products')

  const renderProductList = () => productList?.map((product) => <ProductCard product={product} />)

  return <section className="product-list">{renderProductList()}</section>
}

export default ProductListBody
