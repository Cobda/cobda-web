import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup
} from 'pure-react-carousel'
import CarouselItem from './Item'

interface PopularItem {
  caption: string
}

const PopularItemCarousel = () => {
  const carouselItemList: Array<PopularItem> = [
    { caption: '1st slide' },
    { caption: '2nd slide' },
    { caption: '3rd slide' },
    { caption: '4th slide' },
    { caption: '5th slide' },
  ]

  const renderCarouselSlide = () => {
    return carouselItemList?.map((item, index) => {
      const { caption } = item
      return (
        <Slide index={index}>
          <CarouselItem caption={caption} />
        </Slide>
      )
    })
  }

  return (
    <CarouselProvider
      visibleSlides={3}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      totalSlides={5}
      infinite={true}>
      <Slider>{renderCarouselSlide()}</Slider>
      <ButtonBack className="buttonBack">{'<'}</ButtonBack>
      <ButtonNext className="buttonNext">{'>'}</ButtonNext>
      <DotGroup className="dotGroup" />
    </CarouselProvider>
  )
}

export default PopularItemCarousel
