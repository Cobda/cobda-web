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
import ProfileCard from '../ProfileCard'
import QuoteBox from '../QuoteBox'

interface QuoteBoxItem {
  imagePath: string
  alternate: string
  name: string
  role: string
  quote: string
}

const QuoteBoxCarousel = () => {
  const { t } = useTranslation('about-us')
  const carouselItemList: Array<QuoteBoxItem> = [
    {
      imagePath: '/images/author-bank.jpg',
      alternate: 'Author Bank',
      name: t('author1Name'),
      role: t('author1Role'),
      quote: t('author1Quote')
    },
    {
      imagePath: '/images/author-kim.jpg',
      alternate: 'Author Kim',
      name: t('author2Name'),
      role: t('author2Role'),
      quote: t('author2Quote')
    },
    {
      imagePath: '/images/author-beau.jpg',
      alternate: 'Author Beau',
      name: t('author3Name'),
      role: t('author3Role'),
      quote: t('author3Quote')
    },
    {
      imagePath: '/images/author-kit.jpg',
      alternate: 'Author Kit',
      name: t('author4Name'),
      role: t('author4Role'),
      quote: t('author4Quote')
    }
  ]

  const renderCarouselSlide = () => {
    return carouselItemList?.map((item, index) => {
      const { imagePath, alternate, name, role, quote } = item
      const profileCard = (
        <ProfileCard
          imagePath={imagePath}
          alternate={alternate}
          name={name}
          role={role}
        />
      )
      const quoteBox = <QuoteBox quote={quote} />

      return (
        <Slide index={index}>
          <CarouselItem profileCard={profileCard} quoteBox={quoteBox} />
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
      isPlaying
      isIntrinsicHeight
      lockOnWindowScroll>
      <Slider>{renderCarouselSlide()}</Slider>
      <ButtonBack className="buttonBack">{'<'}</ButtonBack>
      <ButtonNext className="buttonNext">{'>'}</ButtonNext>
    </CarouselProvider>
  )
}

export default QuoteBoxCarousel
