import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'
import { useRecoilValue } from 'recoil'
import { productState } from '../../recoil/atoms'
interface ProductDetail {
  readonly name: string
  readonly price: number
  readonly color: string
  readonly size: string
  readonly deliveryOption: string
}

const COMMA_REGEX = new RegExp(/\B(?=(\d{3})+(?!\d))/g)

const ProductDetail = () => {
  const { t } = useTranslation('product-view')
  const product: any = useRecoilValue(productState)
  const [session] = useSession()
  const router = useRouter()
  const { name, price, color, size, deliveryOption } = product

  const isProductOwner: boolean = session && product ? product.ownerId === session.user.id : false
  const buttonText: string = session ? t('contactSeller') : t('signInRequired')
  const formattedPrice: string = price && price.toString().replace(COMMA_REGEX, ',')
  const priceLabel: string = formattedPrice + ' ' + t('baht')
  const colorLabel: string = t('color') + color
  const sizeLabel: string = t('size') + size
  const deliveryOptionLabel: string = t('deliveryOption') + deliveryOption
  const labels: string[] = [colorLabel, sizeLabel, deliveryOptionLabel]

  const handleClick = () => {
    if (session) {
      // TODO: Append modal instead
      router.push('/account')
    } else {
      router.push('/sign-in')
    }
  }

  const renderProductLabels = () => labels.map((label) => <h3 className="product-detail__label">{label}</h3>)

  const renderProductButton = () =>
    isProductOwner ? (
      <></>
    ) : (
      <div className="product-detail__footer">
        <button className="product-detail__button" disabled={isProductOwner} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    )

  return (
    <div className="product-detail">
      <header className="product-detail__header">
        <h2 className="product-detail__title">{name}</h2>
      </header>
      <div className="product-detail__body">
        <div className="product-detail__label-container">
          <h3 className="product-detail__label">{priceLabel}</h3>
        </div>
        {renderProductLabels()}
      </div>
      {renderProductButton()}
    </div>
  )
}

export default ProductDetail
