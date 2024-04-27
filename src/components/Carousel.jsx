import styled from "styled-components";
import { useCarousel } from "../contexts/CarouselContext.jsx";

export const Carousel = () => {
  const { testimonialNumber, testimonial, handlers } = useCarousel();

  const translateValue = -testimonialNumber * 100;

  return (
    <CarouselContainer {...handlers} className="carousel">
      {testimonial.map(({ image, id }) => (
        <Slide key={id} translateValue={translateValue}>
          <CarouselBox>
            <Image
              src={image}
              alt="image with testimonial from previous participants"
            />
          </CarouselBox>
        </Slide>
      ))}
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  flex-direction; row;
  overflow: hidden;
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translateValue}%);
`;

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  gap: 16px;
`;

const Image = styled.img``;
