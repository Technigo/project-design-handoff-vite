import styled from "styled-components"
import { Carousel } from "./Carousel.jsx"
import { useCarousel } from "../contexts/CarouselContext.jsx"

export const Feedback = () => {
  const { feedbackNumber, changeNumber } = useCarousel()

  return (
    <StyledFeedback>
      <FeedbackTitle>Feedback by Urban Spinners</FeedbackTitle>
      <Carousel />
      <ButtonContainer>
        <CarouselBtnOne
          onClick={() => changeNumber(0)}
          number={feedbackNumber}
        />
        <CarouselBtnTwo
          onClick={() => changeNumber(1)}
          number={feedbackNumber}
        />
        <CarouselBtnThree
          onClick={() => changeNumber(2)}
          number={feedbackNumber}
        />
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
  border-radius: 50%;
  border: none;
  height: 8px;
  width: 8px;
  padding: 0;
  cursor: pointer;

  @media (min-width: 744px) {
    height: 16px;
    width: 16px;
  }
`

const CarouselBtnOne = styled(CarouselBtn)`
  background-color: ${(props) => (props.number === 0 ? "#989898" : "#d9d9d9")};
`

const CarouselBtnTwo = styled(CarouselBtn)`
  background-color: ${(props) => (props.number === 1 ? "#989898" : "#d9d9d9")};
`

const CarouselBtnThree = styled(CarouselBtn)`
  background-color: ${(props) => (props.number === 2 ? "#989898" : "#d9d9d9")};
`
