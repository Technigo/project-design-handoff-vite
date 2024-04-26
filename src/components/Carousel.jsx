import styled from "styled-components"
import { useCarousel } from "../contexts/CarouselContext.jsx"

export const Carousel = () => {
  const { feedbackNumber, feedback, handlers } = useCarousel()  

  const translateValue = -feedbackNumber * 100;

  return (
    <CarouselContainer {...handlers} className="carousel">
      {feedback.map(({ image, text, name, title, id }) => (
        <Slide key={id} translateValue={translateValue}>
          <CarouselBox>
            <Image src={image} alt={`Image of ${name}`} />
            <TextDiv>
              <Text>{text}</Text>
              <NameDiv>
                <Name>{name}</Name>
                <p>{title}</p>
              </NameDiv>
            </TextDiv>
          </CarouselBox>
        </Slide>
      ))}
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  @media (max-width: 1493px) {
  display: flex;
  flex-direction; row;
  overflow: hidden;
  width: 100%;
`

const Slide = styled.div`
  @media (max-width: 1493px) {
    flex: 0 0 100%;
    transition: transform 0.5s ease;
    transform: translateX(${(props) => props.translateValue}%);
  }
`

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  gap: 16px;

  @media (min-width: 744px) and (max-width: 1493px) {
    flex-direction: row;
    gap: 40px;
    margin-left: 32px;
    margin-right: 184px;
  }

  @media (min-width: 1494px) {
    margin: 0 40px;
    align-items: flex-start;
    gap: 64px;
  }
`

const Image = styled.img`
  width: 160px;
  height: 160px;
  
  @media (min-width: 744px) {
    width: 208px;
    height: 208px
  }
`

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 744px) {
    gap: 32px;
  }
`

const Text = styled.p`
  font-style: italic;
  text-align: left;
`

const NameDiv = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
`

const Name = styled.p`
  @media (min-width: 744px) and (max-width: 1493px) {
    font-size: 20px;
  }
`