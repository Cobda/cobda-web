import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import CarouselItem from './Item'
import useTranslation from 'next-translate/useTranslation'

interface QuoteBoxItem {
  imagePath: string
  alternate: string
  name: string
  role: string
  quote: string
}

const QuoteBoxCarousel = () => {
  const { t } = useTranslation('about-us')

  // TODO: Remove this sample and use data from backend instead
  const carouselItemList: Array<QuoteBoxItem> = new Array(4).fill({
    imagePath: '/images/yeezy-380.jpg',
    alternate: 'Adidas fashion sportswear',
    name: t('name'),
    role: t('role'),
    quote: t('quoteSectionContent'),
  })

  const renderCarouselSlide = () => {
    return carouselItemList?.map((item, index) => {
      const { imagePath, alternate, name, role, quote } = item

      return (
        <Slide index={index}>
          <CarouselItem
            imagePath={imagePath}
            alternate={alternate}
            name={name}
            role={role}
            quote={quote}
          />
        </Slide>
      )
    })
  }

  return (
    <CarouselProvider
      className="carousel carousel--quote"
      visibleSlides={1}
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={4}
      infinite
      isPlaying={false}
      isIntrinsicHeight
      lockOnWindowScroll>
      <Slider>{renderCarouselSlide()}</Slider>
      <ButtonBack className="buttonBack">{'<'}</ButtonBack>
      <ButtonNext className="buttonNext">{'>'}</ButtonNext>
    </CarouselProvider>
  )
}

export default QuoteBoxCarousel
