import cardOne from "../assets/testimonialCards/LegendOne.png";
import cardTwo from "../assets/testimonialCards/LegendTwo.png";
import cardThree from "../assets/testimonialCards/LegendThree.png";
import styled from "styled-components";

export const TestimonialCards = () => {
  return (
    <>
      
        <TextSection>
          <h1>What other Bettys say</h1>
        </TextSection>
        <CardSection>
        <CardOne></CardOne>
        <CardTwo></CardTwo>
        <CardThree></CardThree>
      </CardSection>
    </>
  );
};

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
`;
const CardSection = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const CardOne = styled.div`
  background-image: url(${cardOne});
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  width: 200px;
`;

const CardTwo = styled.div`
  background-image: url(${cardTwo});
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  width: 200px;
`;

const CardThree = styled.div`
  background-image: url(${cardThree});
  background-repeat: no-repeat;
  background-size: contain;
  height: 200px;
  width: 200px;
  dispaly: none;
`;
