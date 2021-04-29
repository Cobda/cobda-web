import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import TextField from '../InputField/TextField'
import useTranslation from 'next-translate/useTranslation'
import { ImageListType } from 'react-images-uploading'
import ProductUpload from '../ProductUpload'
import Dropdown, { Option } from 'react-dropdown'
import TextArea from '../Textarea'
import axios from 'axios'
import { BASE_URL } from '../../constant'

interface FormInput {
  readonly name: string
  readonly price: string
  readonly color: string
  readonly size: string
  readonly description: string
}

const initialInputValue: FormInput = {
  name: '',
  price: '',
  color: '',
  size: '',
  description: ''
}

const NUMBER_ONLY_PATTERN_VALUE = new RegExp(/^[1-9][0-9]*$/)
const TEXT_ONLY_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z' ,.'-]+$/i)
const TEXT_AND_NUMBER_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z0-9' ,.'-]+$/i)

const Form = () => {
  const [productImages, setProductImages] = useState<ImageListType>([])
  const [isImageVerified, setImageVerified] = useState<boolean>(true)
  const [ImageError, setImageError] = useState<any>({})
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedDelivery, setSelectedDelivery] = useState<string>('')
  const router = useRouter()
  const { t } = useTranslation('product-registration')
  const { register, handleSubmit, getValues, setValue, watch, errors } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: initialInputValue
  })
  // TODO: Fetch these options from database instead
  const categoryOption: string[] = ['footwear', 'shirt', 'accessory'].map((option) => t(option))
  const deliveryOption: string[] = ['postal', 'meetUp', 'both'].map((option) => t(option))
  const hasProductImage: boolean = productImages.length > 0

  useEffect(() => {
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (hasProductImage) {
        event.preventDefault()
        event.returnValue = t('warningText')
      }
    }

    const handleBrowseAway = () => {
      if (hasProductImage && !window.confirm(t('warningText'))) {
        router.events.emit('routeChangeError')
        throw 'routeChange aborted.'
      }
    }

    watch()
    window.addEventListener('beforeunload', handleWindowClose)
    router.events.on('routeChangeStart', handleBrowseAway)

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose)
      router.events.off('routeChangeStart', handleBrowseAway)
    }
  }, [productImages])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setValue(name as keyof FormInput, value)
  }

  const handleFormSubmit = async (value: FormInput) => {
    const imagePath: string = productImages.map((product) => product.dataURL).join('?')
    const body = {
      ...value,
      price: parseInt(value.price),
      productImagePath: imagePath,
      category: selectedCategory,
      deliveryOption: selectedDelivery
    }

    await axios.post(BASE_URL + '/api/products/', body).then(() => {
      setProductImages([])
      router.push('/products')
    })
  }

  const getErrorMessage = (inputKey: keyof FormInput): string => {
    const errorMessage: string = errors[inputKey]?.message || ''

    return errorMessage ? errorMessage : ''
  }

  const renderProductUpload = () => {
    const renderErrorMessage = () => {
      const message = () => {
        if (ImageError?.maxNumber && ImageError?.maxFileSize) {
          return t('maxFilenNumberAndSizeExceed')
        } else if (ImageError?.maxNumber) {
          return t('maxFileNumberExceed')
        } else if (ImageError?.maxFileSize) {
          return t('maxFileSizeExceed')
        } else if (!isImageVerified) {
          return t('nonVerifiedImageError')
        } else {
          return ''
        }
      }

      return message() ? <div className="form__help">{message()}</div> : <></>
    }

    return (
      <div className="form__product">
        <label className="form__label">{t('productImage')}</label>
        <ProductUpload
          images={productImages}
          maxNumber={3}
          acceptType={['jpg', 'jpeg', 'png']}
          imageCaption={t('addThreeImages')}
          onUpload={setProductImages}
          onError={setImageError}
          onImageVerified={setImageVerified}
        />
        {renderErrorMessage()}
      </div>
    )
  }

  const renderProductTextField = () => {
    const requiredProperty: Object = {
      required: {
        value: true,
        message: t('inputValueRequired')
      }
    }
    const getNameReference: (ref: HTMLInputElement) => void = register({
      ...requiredProperty,
      pattern: {
        value: TEXT_AND_NUMBER_PATTERN_VALUE,
        message: t('inputNameInvalid')
      }
    })
    const getPriceReference: (ref: HTMLInputElement) => void = register({
      ...requiredProperty,
      pattern: {
        value: NUMBER_ONLY_PATTERN_VALUE,
        message: t('inputPriceInvalid')
      }
    })
    const getColorReference: (ref: HTMLInputElement) => void = register({
      ...requiredProperty,
      pattern: {
        value: TEXT_ONLY_PATTERN_VALUE,
        message: t('inputColorInvalid')
      }
    })
    const getSizeReference: (ref: HTMLInputElement) => void = register({
      ...requiredProperty,
      pattern: {
        value: TEXT_AND_NUMBER_PATTERN_VALUE,
        message: t('inputSizeInvalid')
      }
    })

    return (
      <div className="form__input-product">
        <TextField
          name="name"
          label={t('name')}
          inputType="text"
          placeholder={t('namePlaceholder')}
          errorMessage={getErrorMessage('name')}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="price"
          label={t('price')}
          inputType="number"
          placeholder={t('pricePlaceholder')}
          errorMessage={getErrorMessage('price')}
          onChange={handleInputChange}
          inputRef={getPriceReference}
        />
        <TextField
          name="color"
          label={t('color')}
          inputType="text"
          placeholder={t('colorPlaceholder')}
          errorMessage={getErrorMessage('color')}
          onChange={handleInputChange}
          inputRef={getColorReference}
        />
        <TextField
          name="size"
          label={t('size')}
          inputType="text"
          placeholder={t('sizePlaceholder')}
          errorMessage={getErrorMessage('size')}
          onChange={handleInputChange}
          inputRef={getSizeReference}
        />
      </div>
    )
  }

  const renderProductTextarea = () => {
    const getTextareaReference: (ref: HTMLTextAreaElement) => void = register({
      required: {
        value: true,
        message: t('inputValueRequired')
      }
    })

    return (
      <TextArea
        name="description"
        label={t('description')}
        errorMessage={getErrorMessage('description')}
        onChange={handleInputChange}
        textareaRef={getTextareaReference}
      />
    )
  }

  const renderProductDropdown = () => {
    const handleDropdownChange = (setOption: (option: string) => void) => (selectedOption: Option) => {
      setOption(selectedOption.value)
    }

    return (
      <div className="form__dropdown">
        <div className="form__dropdown-group">
          <label className="form__label">{t('category')}</label>
          <Dropdown
            menuClassName="dropdown__option-menu"
            options={categoryOption}
            value={selectedCategory}
            placeholder="-"
            onChange={handleDropdownChange(setSelectedCategory)}
          />
        </div>
        <div className="form__dropdown-group">
          <label className="form__label">{t('deliveryOption')}</label>
          <Dropdown
            menuClassName="dropdown__option-menu"
            options={deliveryOption}
            value={selectedDelivery}
            placeholder="-"
            onChange={handleDropdownChange(setSelectedDelivery)}
          />
        </div>
      </div>
    )
  }

  const renderSubmitButton = () => {
    const hasEmptyInputValue: boolean = Object.values(getValues()).includes('')
    const hasInputError: boolean = Object.keys(errors).length > 0
    const isFormSubmitDisabled: boolean =
      hasInputError ||
      hasEmptyInputValue ||
      !hasProductImage ||
      !isImageVerified ||
      !selectedCategory ||
      !selectedDelivery

    return (
      <div className="form__actionable">
        <button className="form__button" disabled={isFormSubmitDisabled}>
          {t('submit')}
        </button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      {renderProductUpload()}
      {renderProductTextField()}
      {renderProductDropdown()}
      {renderProductTextarea()}
      {renderSubmitButton()}
    </form>
  )
}

export default Form
