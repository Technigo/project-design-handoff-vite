import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding-bottom: 70px;
  padding-left: 20px;
  padding-right: 20px;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h1`
  font-family: Gerbera;
  font-weight: 700;
  font-size: 64px;
  line-height: 85.57px;
  text-align: center;
  color: #620981;
  margin-bottom: 50px;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 42.78px;
    margin-top: 60px;
    margin-bottom: 10px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: nowrap;
  position: relative;
  width: 100%;

  @media (max-width: 1199px) and (min-width: 726px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  flex: 1;
  max-width: 33.33%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 1199px) and (min-width: 726px) {
    max-width: 30%;
    padding: 15px;
  }
`;

const CardNumber = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 138px;
  line-height: 170px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#620981" : "#FFFFFF")};
  text-shadow: ${({ isSelected }) =>
    isSelected
      ? "none"
      : "1px 1px 0 #111111, -1px -1px 0 #111111, 1px -1px 0 #111111, -1px 1px 0 #111111"};

  @media (max-width: 1200px) {
    font-size: 96px;
    line-height: 144px;
  }
`;

const CardText = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #111111;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 24px;
    line-height: 36px;
    margin-top: -10px;
  }
`;

const CardBulletText = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #111111;
  white-space: pre-wrap;

  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const CardPrice = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #111111;
  margin-top: 30px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const CardButton = styled.button`
  width: 300px;
  height: 64px;
  border-radius: 50px;
  border: 1px solid #620981;
  background-color: ${({ isSelected }) =>
    isSelected ? "#620981" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#620981")};
  font-family: Poppins;
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  text-align: center;
  padding: 10px 40px;
  margin-top: 10px;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 180px;
    height: 50px;
    padding: 10px 30px;
    font-size: 18px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 475px;
  background-color: #111111;
  position: absolute;
  top: 40px;
  left: calc(33.33% - 10px);

  &:last-child {
    left: calc(66.66% - 10px);
  }

  @media (max-width: 1199px) and (min-width: 726px) {
    height: 370px;
    left: calc(33.33% - 5px);
    &:last-child {
      left: calc(66.66% - 5px);
    }
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const YogaPackages = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardNumber) => {
    setSelectedCard(cardNumber);
  };

  const cardDetails = {
    1: {
      text: "Yoga Drop-In",
      bullets: ["• Free yoga mat and towel is included"],
      price: "250 SEK",
    },
    2: {
      text: "Yoga Intro",
      bullets: ["• Unlimited yoga for 14 days", "• Only for new members"],
      price: "499 SEK",
    },
    3: {
      text: "Yoga Anytime",
      bullets: ["• Unlimited access to all yoga classes"],
      price: "5499 SEK",
    },
  };

  return (
    <Container>
      <ContentWrapper>
        <Header>Start your journey</Header>
        <CardsContainer>
          {[1, 2, 3].map((card) => (
            <Card
              key={card}
              onClick={() => handleCardClick(card)}
              isSelected={selectedCard === card}
            >
              <CardNumber isSelected={selectedCard === card}>{card}</CardNumber>
              <CardText>{cardDetails[card].text}</CardText>
              {cardDetails[card].bullets.map((bullet, index) => (
                <CardBulletText key={index}>{bullet}</CardBulletText>
              ))}
              <CardPrice>{cardDetails[card].price}</CardPrice>
              <CardButton isSelected={selectedCard === card}>
                Buy now
              </CardButton>
            </Card>
          ))}
          <Divider />
          <Divider />
        </CardsContainer>
      </ContentWrapper>
    </Container>
  );
};
