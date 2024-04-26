import priceCardOne from "../assets/priceCards/priceCardOne.png";
import priceCardTwo from "../assets/priceCards/priceCardTwo.png";
import priceCardThree from "../assets/priceCards/priceCardThree.png";
import styled from "styled-components";

export const MakeYourPick = () => {
  return (
  <>
  <TextSection>
    <h1>Make Your Pick</h1>
  </TextSection>
  <CardSection>
  <MakeYourPickOne />
  <MakeYourPickTwo />
  <MakeYourPickThree />
  </CardSection>
  </>
  )
};

const TextSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  h1 {
    color: var(--Powder-Black, #0b1623);
    text-align: center;
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

const CardSection = styled.div`
  display: flex;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const MakeYourPickOne = styled.div`
  background-image: url(${priceCardOne});
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  width: 200px;
`;

const MakeYourPickTwo = styled.div`
  background-image: url(${priceCardTwo});
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  width: 200px;
`;

const MakeYourPickThree = styled.div`
  background-image: url(${priceCardThree});
  background-repeat: no-repeat;
  background-size: contain;
  height: 300px;
  width: 200px;
`;
