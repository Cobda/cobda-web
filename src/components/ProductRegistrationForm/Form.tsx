import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import TextField from '../InputField/TextField'
import useTranslation from 'next-translate/useTranslation'
import ProductUpload from '../ProductUpload'
import Dropdown from 'react-dropdown'

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

const NAME_VALIDATION_INDEX: number = 1
const NAME_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z' ,.'-]+$/i)
// TODO: Fetch options from database instead
const CATEGORY_OPTIONS: string[] = ['Footwear', 'Shirts', 'SurfSkates', 'Accessories', 'Other']
const DELIVERY_OPTIONS: string[] = ['Postal', 'Meet up', 'Other']

const Form = () => {
  const [isProductUploaded, setProductUploaded] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedDelivery, setSelectedDelivery] = useState<string>('')
  const { register, handleSubmit, getValues, setValue, watch, errors } = useForm<FormInput>({
    mode: 'onChange',
    defaultValues: initialInputValue
  })
  const router = useRouter()
  const { t } = useTranslation('product-registration')

  useEffect(() => {
    const handleWindowClose = (event: BeforeUnloadEvent) => {
      if (isProductUploaded) {
        event.preventDefault()
        event.returnValue = t('warningText')
      }
    }

    const handleBrowseAway = () => {
      if (isProductUploaded && !window.confirm(t('warningText'))) {
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
  }, [isProductUploaded])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValue(name as keyof FormInput, value)
  }

  const handleFormSubmit = (value: FormInput) => {
    // TODO: Send POST request to backend
    setProductUploaded(false)
  }

  const renderProductUpload = () => (
    <div className="form__profile">
      <ProductUpload />
    </div>
  )

  const renderProductDetailInput = () => {
    const getNameReference: (ref: HTMLInputElement) => void = register({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
      pattern: {
        value: NAME_PATTERN_VALUE,
        message: t('inputImproperName')
      }
    })

    const getErrorMessage = (inputKey: keyof FormInput, startValidationIndex: number): string => {
      const errorMessage: string | undefined = errors[inputKey]?.message
      const isErrorDisplayed: boolean | undefined = getValues()[inputKey]?.length >= startValidationIndex

      return errorMessage && isErrorDisplayed ? errorMessage : ''
    }

    return (
      <>
        <TextField
          name="name"
          label={t('name')}
          inputType="text"
          placeholder={t('namePlaceholder')}
          errorMessage={getErrorMessage('name', NAME_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="price"
          label={t('price')}
          inputType="number"
          placeholder={t('pricePlaceholder')}
          errorMessage={getErrorMessage('price', NAME_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="color"
          label={t('color')}
          inputType="text"
          placeholder={t('colorPlaceholder')}
          errorMessage={getErrorMessage('color', NAME_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="size"
          label={t('size')}
          inputType="text"
          placeholder={t('sizePlaceholder')}
          errorMessage={getErrorMessage('size', NAME_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="description"
          label={t('description')}
          inputType="text"
          placeholder={t('descriptionPlaceholder')}
          errorMessage={getErrorMessage('description', NAME_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <div className="">
          <Dropdown options={CATEGORY_OPTIONS} value={selectedCategory} placeholder="Select an option" />
          <Dropdown options={DELIVERY_OPTIONS} value={selectedDelivery} placeholder="Select an option" />
        </div>
      </>
    )
  }

  const renderSubmitButton = () => {
    const hasInputError: boolean = Object.keys(errors).length > 0
    const isFormSubmitDisabled: boolean = !isProductUploaded || hasInputError

    return (
      <div className="form__actionable">
        <input className="form__button" type="submit" value={t('submit')} disabled={isFormSubmitDisabled} />
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
      {renderProductDetailInput()}
      {renderProductUpload()}
      {renderSubmitButton()}
    </form>
  )
}

export default Form
