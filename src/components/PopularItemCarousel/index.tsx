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
  // TODO: Remove this sample and use data from backend instead
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
      className="carousel carousel--popular-item"
      visibleSlides={3}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      totalSlides={5}
      infinite>
      <Slider>{renderCarouselSlide()}</Slider>
      <ButtonBack className="buttonBack buttonBack--uplift">{'<'}</ButtonBack>
      <ButtonNext className="buttonNext buttonBack--uplift">{'>'}</ButtonNext>
      <DotGroup className="dotGroup" />
    </CarouselProvider>
  )
}

export default PopularItemCarousel
