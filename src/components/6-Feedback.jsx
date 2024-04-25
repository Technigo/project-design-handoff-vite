import { Carousel } from "./Carousel.jsx"
import styled from "styled-components"

export const Feedback = () => {

  return (
    <StyledFeedback>
      <FeedbackTitle>Feedback by Urban Spinners</FeedbackTitle>
      <Carousel />
      <ButtonContainer>
        <CarouselBtn />
        <CarouselBtn />
        <CarouselBtn />
      </ButtonContainer>
    </StyledFeedback>
  )
}

const StyledFeedback = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  
  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
  }
  @media (min-width: 1494px) {
    grid-column: span 12;
  }
`

const FeedbackTitle = styled.h2`
  text-align: center; 
  margin-left: 16px;
  margin-right: 16px;

  @media (min-width: 744px) and (max-width: 1493px) 
    text-align: left;
  }

`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const CarouselBtn = styled.button`
  background: none;
`