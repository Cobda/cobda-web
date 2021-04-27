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

const PopularItemCarousel = () => {
  const renderCarouselSlide = () => {
    const carouselItemList: Array<CarouselItem> = [
      {
        imagePath: '/images/thrasher-sock.jpg',
        alternative: 'Thrasher sock',
        caption: 'Thrasher Sock'
      },
      {
        imagePath: '/images/adidas-blue-jacket.jpeg',
        alternative: 'Adidas blue jacket',
        caption: 'Adidas Blue Jacket'
      },
      {
        imagePath: '/images/adidas-sweater.jpg',
        alternative: 'Adidas robotic sweater',
        caption: 'Adidas Robotic Sweater'
      },
      {
        imagePath: '/images/ck-sport-bra.jpg',
        alternative: 'Calvin Klein sport bra',
        caption: 'Calvin Klein Sport Bra'
      },
      {
        imagePath: '/images/air-jordan.jpg',
        alternative: 'Air jordan',
        caption: 'Air Jordan'
      }
    ]

    return carouselItemList?.map((item, index) => {
      const { imagePath, alternative, caption } = item

      return (
        <Slide index={index}>
          <CarouselItem
            imagePath={imagePath}
            alternative={alternative}
            caption={caption}
          />
        </Slide>
      )
    })
  }

  return (
    <CarouselProvider
      className="carousel--popular-item"
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
