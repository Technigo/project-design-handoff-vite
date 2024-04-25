import { Carousel } from "./Carousel.jsx"
import styled from "styled-components"
import { useCarousel } from "../contexts/CarouselContext.jsx"

export const Feedback = () => {
  const { feedbackNumber, changeNumber } = useCarousel()

  return (
    <StyledFeedback>
      <FeedbackTitle>Feedback by Urban Spinners</FeedbackTitle>
      <Carousel />
      <ButtonContainer>
        <CarouselBtn onClick={changeNumber(1)} />
        <CarouselBtn onClick={changeNumber(2)} />
        <CarouselBtn onClick={changeNumber(3)} />
      </ButtonContainer>
    </StyledFeedback>
  )
}

const StyledFeedback = styled.div`
  grid-column: span 4;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;

  @media (min-width: 744px) and (max-width: 1493px) {
    grid-column: span 8;
    padding: 128px 0;
  }

  @media (min-width: 1494px) {
    grid-column: span 12;
    padding: 160px 0;
  }
`;

const FeedbackTitle = styled.h2`
  text-align: center; 
  margin-left: 16px;
  margin-right: 16px;

  @media (min-width: 744px) and (max-width: 1493px){
    text-align: left;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (min-width: 1494px) {
    display: none;
  }
`

const CarouselBtn = styled.button`
  background-color: #d9d9d9;
  border-radius: 50%;
  border: none;
  height: 8px;
  width: 8px;
  padding: 0;

  @media (min-width: 744px) {
    height: 16px;
    width: 16px;
  }
`