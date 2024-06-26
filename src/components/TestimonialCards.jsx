import styled from "styled-components"
import { Carousel } from "./Carousel.jsx"
import { useCarousel } from "../contexts/CarouselContext.jsx"

export const TestimonialCards = () => {
  const { testimonialNumber, changeNumber } = useCarousel()
  return (
    <>
      <StyledTestimonial>
        <TextSection>
          <h1>What other Bettys say</h1>
        </TextSection>
        <Carousel />
        <ButtonContainer>
          <CarouselBtnOne
            onClick={() => changeNumber(0)}
            number={testimonialNumber}
            aria-label="Testimonial picture one"
          />
          <CarouselBtnTwo
            onClick={() => changeNumber(1)}
            number={testimonialNumber}
            aria-label="Testimonial picture two"
          />
          <CarouselBtnThree
            onClick={() => changeNumber(2)}
            number={testimonialNumber}
            aria-label=" Testimonial picture three"
          />
        </ButtonContainer>
      </StyledTestimonial>
    </>
  )
}

const StyledTestimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`

const CarouselBtn = styled.button`
  border-radius: 50%;
  border: none;
  height: 10px;
  width: 8px;
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

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  h1 {
    color: var(--Powder-Black, #0b1623);
    text-align: center;
    /* Powder/Mobile/Headings */
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 39px */
  }
`
