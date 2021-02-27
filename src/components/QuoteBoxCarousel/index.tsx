import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import CarouselItem from './Item'
import useTranslation from 'next-translate/useTranslation'

const QuoteBoxCarousel = () => {
  const { t } = useTranslation('about-us')

  return (
    <CarouselProvider
      visibleSlides={1}
      naturalSlideWidth={4}
      naturalSlideHeight={5}
      totalSlides={4}
      infinite={true}
      // isPlaying={true}
    >
      <Slider>
        <Slide index={0}>
          <CarouselItem
            imagePath="/images/yeezy-380.jpg"
            alternate=""
            name={t('name')}
            role={t('role')}
            quote={t('quoteSectionContent')}
          />
        </Slide>
        <Slide index={1}>
          <CarouselItem
            imagePath="/images/yeezy-380.jpg"
            alternate=""
            name={t('name')}
            role={t('role')}
            quote={t('quoteSectionContent')}
          />
        </Slide>
        <Slide index={2}>
          <CarouselItem
            imagePath="/images/yeezy-380.jpg"
            alternate=""
            name={t('name')}
            role={t('role')}
            quote={t('quoteSectionContent')}
          />
        </Slide>
        <Slide index={3}>
          <CarouselItem
            imagePath="/images/yeezy-380.jpg"
            alternate=""
            name={t('name')}
            role={t('role')}
            quote={t('quoteSectionContent')}
          />
        </Slide>
      </Slider>
      <ButtonBack className="buttonBack buttonBack--center">{'<'}</ButtonBack>
      <ButtonNext className="buttonNext buttonNext--center">{'>'}</ButtonNext>
    </CarouselProvider>
  )
}

export default QuoteBoxCarousel
