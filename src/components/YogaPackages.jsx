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

  @media (max-width: 768px) {
    padding-bottom: 100px;
  }
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

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 60px;
    margin-bottom: 30px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  width: 340px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
`;

const CardNumber = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 100px;
  line-height: 120px;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#620981" : "#FFFFFF")};
  text-shadow: ${({ isSelected }) =>
    isSelected
      ? "none"
      : "1px 1px 0 #111111, -1px -1px 0 #111111, 1px -1px 0 #111111, -1px 1px 0 #111111"};

  @media (max-width: 768px) {
    font-size: 80px;
    line-height: 100px;
  }
`;

const CardText = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #111111;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const CardBulletText = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #111111;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const CardPrice = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  color: #111111;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const CardButton = styled.button`
  width: 280px;
  height: 50px;
  border-radius: 50px;
  border: 1px solid #620981;
  background-color: ${({ isSelected }) =>
    isSelected ? "#620981" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "#FFFFFF" : "#620981")};
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 10px 40px;
  margin-top: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 20px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 320px;
  background-color: #111111;
  position: absolute;
  top: 40px;
  left: calc(50% - 170px);
  &:last-child {
    left: calc(50% + 170px);
  }

  @media (max-width: 768px) {
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
