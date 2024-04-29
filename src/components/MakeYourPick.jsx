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
        <MakeYourPickOne src={priceCardOne} />
        <MakeYourPickTwo src={priceCardTwo} />
        <MakeYourPickThree src={priceCardThree} />
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
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 40px;
`;

const MakeYourPickOne = styled.img`
  display: flex;
  height: 380px;
  width: 280px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 1200px) {
    display: flex;
    height: 400px;
    width: 300px;

  }
`;

const MakeYourPickTwo = styled.img`
  display: none;

  @media (min-width: 600px) and (max-width: 1199px) {
    display: flex;
    height: 380px;
    width: 280px;
  }
  @media (min-width: 1200px) {
    display: flex;
    height: 400px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const MakeYourPickThree = styled.img`
  display: none;

  @media (min-width: 600px) and (max-width: 1199px) {
    display: none;
  }
  @media (min-width: 1200px) {
    display: flex;
    height: 400px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
