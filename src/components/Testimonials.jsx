import { TestimonialCard } from "./TestimonialCard";
import styled from "styled-components";

const testimonials = [
  {
    stars: 5,
    title: "Titel",
    text: "Text",
    location: "New York, NY",
    name: "Namn",
  },
  {
    stars: 4,
    title: "Hej",
    text: "Annan Text",
    location: "hej, NY",
    name: "Anna",
  },
];

const TestimonialContainer = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TestimonialWrapper = styled.div`
  scroll-snap-align: start;
  flex: 0 0 auto;
  width: 85%;
`;

export const Testimonials = () => {
  return (
    <TestimonialContainer>
      {testimonials.map((testimonial, index) => (
        <TestimonialWrapper key={index}>
          <TestimonialCard
            stars={testimonial.stars}
            title={testimonial.title}
            text={testimonial.text}
            location={testimonial.location}
            name={testimonial.name}
          />
        </TestimonialWrapper>
      ))}
    </TestimonialContainer>
  );
};
