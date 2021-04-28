import React from 'react'
import ProductCard from '../ProductCard'
import useTranslation from 'next-translate/useTranslation'
import { useRecoilValue } from 'recoil'
import { filteredProductListState } from '../../recoil/selectors/product'
import { productListState } from '../../recoil/atoms/product'

const ProductListBody = () => {
  const productList = useRecoilValue(filteredProductListState)
  // const articles = new Array(20).fill(<ProductCard />)

  const { t } = useTranslation('products')

  const renderProductList = () => productList?.map((product) => <ProductCard product={product} />)

  return (
    <section className="product-list">
      {renderProductList()}
      {/* <div className="product-list__actionable">
        <input className="product-list__button" type="submit" value={t('viewMore')} />
      </div> */}
    </section>
  )
}

export default ProductListBody
