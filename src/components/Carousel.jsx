import styled from "styled-components";
import { Card } from "./Card";

const cardContent = [
  {
    image: "/unsplash_Brooke-Cagle.jpg",
    alt: "Women stretching",
    heading: "Membership",
    text: "Sign up as a member to get full access to the modern and well equipped gym.",
  },
  {
    image: "/unsplash_oORcW5Uc0dM_Brooke-Cagle.jpg",
    alt: "Women lifting weights",
    heading: "Face to face coaching",
    text: "Book a one on one personal meeting to set up a workout plan suitable for your level and goals. ",
  },
  {
    image: "/unsplash_urOgICfIldY_Gett-images.jpg",
    alt: "Woman with computer on yoga mat",
    heading: "Online coaching",
    text: "Even if you’re not to get to our gym in person, I can still help you reach your goals through online coaching.",
  },
  {
    image: "/unsplash_Gxr5vwk1V3k_Anna-Jakutajc-Wojtalik.jpg",
    alt: "Fruits and vegetables",
    heading: "Nutritional coching",
    text: "What you eat is imortant. Book a meeting to set up a nutritional plan that will compliment your active lifestyle. ",
  },
];

const StyledSection = styled.section`
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media all and (min-width: 1440px) {
    align-items: center;
  }
`;

const CarouselContainer = styled.div`
  width: 90vw;
  overflow-x: scroll;
  display: flex;
  flex-direction: column;

  @media all and (min-width: 1440px) {
    width: 100%;
    align-items: center;
  }
`;

const StyledCarousel = styled.div`
  display: flex;
  gap: 16px;
  padding-bottom: 12px;
  width: max-content;

  @media all and (min-width: 1440px) {
    justify-content: center;
  }
`;

const H2 = styled.h2`
  text-transform: uppercase;
  color: #000;
  font-family: Optima;
  font-size: 28px;
  font-weight: 400;
  line-height: 32px; /* 114.286% */
`;

export const Carousel = () => {
  return (
    <StyledSection>
      <H2>Our services</H2>
      <CarouselContainer>
        <StyledCarousel>
          {cardContent.map(card => {
            return (
              <Card
                key={card.heading}
                url={card.image}
                alt={card.alt}
                heading={card.heading}
                text={card.text}
              />
            );
          })}
        </StyledCarousel>
      </CarouselContainer>
    </StyledSection>
  );
};
