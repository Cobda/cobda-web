import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import TextField from '../InputField/TextField'
import useTranslation from 'next-translate/useTranslation'
import { ErrorsType, ImageListType } from 'react-images-uploading'
import ProductUpload from '../ProductUpload'
import Dropdown, { Option } from 'react-dropdown'
import TextArea from '../Textarea'

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

const INPUT_TEXT_VALIDATION_INDEX: number = 2
const INPUT_NUMBER_VALIDATION_INDEX: number = 1
const TEXT_ONLY_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z' ,.'-]+$/i)
const TEXT_AND_NUMBER_PATTERN_VALUE: RegExp = new RegExp(/^[\u0E00-\u0E7Fa-zA-Z0-9' ,.'-]+$/i)

const Form = () => {
  const [productImages, setProductImages] = useState<ImageListType>([])
  const [ImageError, setImageError] = useState<ErrorsType>({})
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

  const handleFormSubmit = (value: FormInput) => {
    // TODO: Send POST request to backend
    setProductImages([])
  }

  const getErrorMessage = (inputKey: keyof FormInput, startValidationIndex: number): string => {
    const errorMessage: string = errors[inputKey]?.message || ''
    const isErrorDisplayed: boolean = getValues()[inputKey]?.length >= startValidationIndex

    return errorMessage || isErrorDisplayed ? errorMessage : ''
  }

  const renderProductUpload = () => {
    const renderErrorMessage = () => {
      let errorMessage: string = ''
      if (ImageError?.maxNumber && ImageError.maxFileSize) {
        errorMessage = t('maxFilenNumberAndSizeExceed')
      } else if (ImageError?.maxNumber) {
        errorMessage = t('maxFileNumberExceed')
      } else if (ImageError?.maxFileSize) {
        errorMessage = t('maxFileSizeExceed')
      }

      return errorMessage ? <div className="form__help">{errorMessage}</div> : <></>
    }

    return (
      <div className="form__product">
        <label className="form__label">{t('productImage')}</label>
        <ProductUpload
          images={productImages}
          maxNumber={3}
          acceptType={['jpg', 'png']}
          imageCaption={t('addThreeImages')}
          onUpload={setProductImages}
          onError={setImageError}
        />
        {renderErrorMessage()}
      </div>
    )
  }

  const renderProductTextField = () => {
    const getNameReference: (ref: HTMLInputElement) => void = register({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
      pattern: {
        value: TEXT_AND_NUMBER_PATTERN_VALUE,
        message: t('inputNameExample')
      }
    })
    const getPriceReference: (ref: HTMLInputElement) => void = register({
      required: {
        value: true,
        message: t('inputValueRequired')
      }
    })
    const getColorReference: (ref: HTMLInputElement) => void = register({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
      pattern: {
        value: TEXT_ONLY_PATTERN_VALUE,
        message: t('inputColorExample')
      }
    })
    const getSizeReference: (ref: HTMLInputElement) => void = register({
      required: {
        value: true,
        message: t('inputValueRequired')
      },
      pattern: {
        value: TEXT_AND_NUMBER_PATTERN_VALUE,
        message: t('inputSizeExample')
      }
    })

    return (
      <div className="form__input-container">
        <TextField
          name="name"
          label={t('name')}
          inputType="text"
          placeholder={t('namePlaceholder')}
          errorMessage={getErrorMessage('name', INPUT_TEXT_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getNameReference}
        />
        <TextField
          name="price"
          label={t('price')}
          inputType="number"
          placeholder={t('pricePlaceholder')}
          errorMessage={getErrorMessage('price', INPUT_NUMBER_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getPriceReference}
        />
        <TextField
          name="color"
          label={t('color')}
          inputType="text"
          placeholder={t('colorPlaceholder')}
          errorMessage={getErrorMessage('color', INPUT_TEXT_VALIDATION_INDEX)}
          onChange={handleInputChange}
          inputRef={getColorReference}
        />
        <TextField
          name="size"
          label={t('size')}
          inputType="text"
          placeholder={t('sizePlaceholder')}
          errorMessage={getErrorMessage('size', INPUT_TEXT_VALIDATION_INDEX)}
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
        errorMessage={getErrorMessage('description', INPUT_TEXT_VALIDATION_INDEX)}
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
      <div className="form__dropdown-container">
        <div className="form__dropdown-group">
          <label className="form__label">{t('category')}</label>
          <Dropdown
            options={categoryOption}
            value={selectedCategory}
            placeholder={t('categoryPlaceholder')}
            onChange={handleDropdownChange(setSelectedCategory)}
          />
        </div>
        <div className="form__dropdown-group">
          <label className="form__label">{t('deliveryOption')}</label>
          <Dropdown
            options={deliveryOption}
            value={selectedDelivery}
            placeholder={t('deliveryOptionPlaceholder')}
            onChange={handleDropdownChange(setSelectedDelivery)}
          />
        </div>
      </div>
    )
  }

  const renderSubmitButton = () => {
    const hasInputError: boolean = Object.keys(errors).length > 0
    const isFormSubmitDisabled: boolean = !hasProductImage || hasInputError || !selectedCategory || !selectedDelivery

    return (
      <div className="form__actionable">
        <input className="form__button" type="submit" value={t('submit')} disabled={isFormSubmitDisabled} />
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
