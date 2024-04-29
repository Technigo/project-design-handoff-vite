import styled from "styled-components";
import { Learn } from "./cards-components/Learn";
import { Live } from "./cards-components/Live";
import { Explore } from "./cards-components/Explore";
import { HaveFun } from "./cards-components/HaveFun";

export const OurOfferings = () => {
  return (
    <>
      <OurOfferingsSection>
        <h1>Our Offerings</h1>
        <p>
          Embark on your snowboarding adventure! Dive into unforgettable
          experiences surrounded by stunning nature, friendly faces, and epic
          vibes.
        </p>
      </OurOfferingsSection>
      <OurOfferingsCards>
        <Learn />
        <Live />
        <Explore />
        <HaveFun />
      </OurOfferingsCards>
    </>
  );
};
const OurOfferingsSection = styled.section`
  
  h1 {
    color: #0b1623;

    /* Powder/Mobile/Headings */
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%; /* 39px */
  }
  p {
    color: var(--Powder-Black, #0b1623);
    /* Powder/Mobile/Body large */
    font-family: Mulish;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%; /* 20.8px */
  }
`;

const OurOfferingsCards = styled.div`
  display: grid;

  @media (min-width: 600px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr;
  
    
  }
  @media (min-width: 1200px){
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
