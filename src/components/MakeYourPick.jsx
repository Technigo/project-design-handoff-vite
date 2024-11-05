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
        <Card>
          <Image src={priceCardOne} alt="Price Card One" />
        </Card>
        <Card>
          <Image src={priceCardTwo} alt="Price Card Two" />
        </Card>
        <Card>
          <Image src={priceCardThree} alt="Price Card Three" />
        </Card>
      </CardSection>
    </>
  );
};

const TextSection = styled.div`
  margin-bottom: 20px;
  margin-top: 40px;

  h1 {
    color: var(--Powder-Black, #0b1623);
    text-align: left;
    font-family: Philosopher;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  @media (min-width: 600px) {
    margin-left: 32px;
    margin-right: auto;
  }
  @media (min-width: 1199px) {
    margin-left: 150px;
    margin-right: auto;
  }
`;

const CardSection = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin-right: auto;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;

  @media (min-width: 600px) {
    margin-left: 32px;
    margin-right: auto;
  }
  @media (min-width: 1199px) {
    margin-left: 150px;
    margin-right: auto;
  }
`;

const Card = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;
  scroll-snap-align: start;
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
