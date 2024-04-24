import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card } from './Card'
import { CardAnimated } from './CardAnimated'
import { handleResize } from '../utils/handleResize'

const cardContent = [
  {
    image: '/unsplash_Brooke-Cagle.jpg',
    alt: 'Women stretching',
    heading: 'Membership',
    text: 'Sign up as a member to get full access to the modern and well-equipped gym.',
  },
  {
    image: '/unsplash_oORcW5Uc0dM_Brooke-Cagle.jpg',
    alt: 'Women lifting weights',
    heading: 'Face to face coaching',
    text: 'Book a one on one personal meeting to set up a workout plan suitable for your level and goals.',
  },
  {
    image: '/unsplash_urOgICfIldY_Gett-images.jpg',
    alt: 'Woman with computer on yoga mat',
    heading: 'Online coaching',
    text: "Even if you're not able to get to our gym in person, I can still help you reach your goals through online coaching.",
  },
  {
    image: '/unsplash_Gxr5vwk1V3k_Anna-Jakutajc-Wojtalik.jpg',
    alt: 'Fruits and vegetables',
    heading: 'Nutritional coaching',
    text: 'What you eat is important. Book a meeting to set up a nutritional plan that will compliment your active lifestyle.',
  },
]

const StyledSection = styled.section`
  margin-top: 56px;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;

  @media all and (min-width: 1024px) {
    align-items: center;
    gap: 80px;
  }
`

const CarouselContainer = styled.div`
width: 95vw;
  height: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}

  @media all and (min-width: 1200px) {
    align-items: center;
  }

  @media all and (min-width: 1440px) {
    width: 100%;
   
`

const StyledCarousel = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 12px;
  width: 100%;
`

const H2 = styled.h2`
  text-transform: uppercase;
  color: #000;
  font-family: Optima, sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px;
`

export const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const cleanup = handleResize(setWindowWidth) // Using imported handleResize function

    return () => cleanup()
  }, [])

  return (
    <StyledSection>
      <H2>Our services</H2>
      <CarouselContainer>
        <StyledCarousel>
          {cardContent.map((card) => (
            <React.Fragment key={card.heading}>
              {windowWidth >= 1440 ? (
                <CardAnimated
                  url={card.image}
                  heading={card.heading}
                  text={card.text}
                />
              ) : (
                <Card
                  url={card.image}
                  alt={card.alt}
                  heading={card.heading}
                  text={card.text}
                />
              )}
            </React.Fragment>
          ))}
        </StyledCarousel>
      </CarouselContainer>
    </StyledSection>
  )
}
