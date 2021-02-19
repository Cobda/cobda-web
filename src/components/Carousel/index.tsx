import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel'
import CarouselItem from './Item'
import 'pure-react-carousel/dist/react-carousel.es.css'

const Carousel = () => {
  return (
    <div className="carousel__container">
      <CarouselProvider
        visibleSlides={3}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        totalSlides={9}
        infinite={true}
      >
        <Slider>
          <Slide index={0}>
            <CarouselItem caption={"1st slide"} />
          </Slide>
          <Slide index={1}>
            <CarouselItem caption={"2nd slide"} />
          </Slide>
          <Slide index={2}>
            <CarouselItem caption={"3rd slide"} />
          </Slide>
          <Slide index={4}>
            <CarouselItem caption={"4th slide"} />
          </Slide>
          <Slide index={5}>
            <CarouselItem caption={"5th slide"} />
          </Slide>
          <Slide index={6}>
            <CarouselItem caption={"6th slide"} />
          </Slide>
          <Slide index={7}>
            <CarouselItem caption={"7th slide"} />
          </Slide>
          <Slide index={8}>
            <CarouselItem caption={"8th slide"} />
          </Slide>
          <Slide index={9}>
            <CarouselItem caption={"9th slide"} />
          </Slide>
        </Slider>
        <ButtonBack className="buttonBack">Back</ButtonBack>
        <ButtonNext className="buttonNext">Next</ButtonNext>
        <DotGroup className="dotGroup" />
      </CarouselProvider>
    </div>
  )
}

export default Carousel
