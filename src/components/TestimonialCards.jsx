import cardOne from "../assets/testimonialCards/CardOne.png";
import cardTwo from "../assets/testimonialCards/CardTwo.png";
import cardThree from "../assets/testimonialCards/CardThree.png"
import styled from "styled-components";

export const TestimonialCards = () => {
  return (
    <>
      <CardSection>
        <CardOne>Card 1</CardOne>
        <CardTwo>Card 2</CardTwo>
        <CardThree>Card 3</CardThree>
      </CardSection>
    </>
  );
};

const CardSection = styled.div`
display: flex;
align-items:
`;



const CardOne = styled.div`
background-image: url(${cardOne})
background-repeat: no-repeat;
background-size: contain;
height: 300px;
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
`
