import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import CarouselItem from './Item'

const QouteBoxCarousel = () => {
  return (
    <CarouselProvider
      visibleSlides={1}
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      totalSlides={4}
      infinite={true}
      // isPlaying={true}
    >
      <Slider>
        <Slide index={0}>
          <CarouselItem
            imagePath=""
            alternate=""
            name="The Rock"
            role="Developer"
            quote="Sample 1"
          />
        </Slide>
        <Slide index={1}>
          <CarouselItem
            imagePath=""
            alternate=""
            name="John Cena"
            role="Developer"
            quote="Sample 2"
          />
        </Slide>
        <Slide index={2}>
          <CarouselItem
            imagePath=""
            alternate=""
            name="Shawn Mentos"
            role="Developer"
            quote="Sample 2"
          />
        </Slide>
        <Slide index={3}>
          <CarouselItem
            imagePath=""
            alternate=""
            name="Amanda Jones"
            role="Developer"
            quote="Sample 3"
          />
        </Slide>
      </Slider>
      <ButtonBack className="buttonBack buttonBack--center">{'<'}</ButtonBack>
      <ButtonNext className="buttonNext buttonNext--center">{'>'}</ButtonNext>
    </CarouselProvider>
  )
}

export default QouteBoxCarousel
