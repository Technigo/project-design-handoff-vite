import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding-bottom: 70px;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;

  @media (max-width: 445px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media (max-width: 725px) {
    background-color: transparent;
    margin-bottom: 30px;
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

  @media (max-width: 1200px) {
    font-size: 32px;
    line-height: 42.78px;
    margin-top: 60px;
    margin-bottom: 10px;
  }

  @media (max-width: 725px) {
    margin-top: -40px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 725px) {
    display: none;
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

  @media (max-width: 725px) {
    font-size: 30px;
    line-height: 30px;
    margin-top: -20px;
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

  @media (max-width: 725px) {
    font-size: 16px;
    line-height: 24px;
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

  @media (max-width: 725px) {
    font-size: 40px;
    line-height: 60px;
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

  @media (max-width: 725px) {
    width: 226px;
    height: 55px;
    padding: 10px 50px;
    font-size: 20px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 480px;
  background-color: #111111;
  flex-shrink: 0;
  margin-top: 40px;

  @media (max-width: 1200px) {
    height: 370px;
  }

  @media (max-width: 725px) {
    display: none;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  .slick-slide {
    display: flex !important;
    justify-content: center;
  }
  .slick-list {
    padding: 0 20px;
  }
`;

const MobileContainer = styled.div`
  width: 100%;
  max-width: 320px;
  min-width: 280px;
  padding: 20px;
  border-radius: 15px;
  background-color: #ffffff;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 40px;

  @media (max-width: 445px) {
    max-width: 280px;
    min-width: 230px;
    padding: 30px;
  }
`;

const MobileTopSection = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;  
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;  
`;

const MobileBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileCardNumber = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 64px; 
  line-height: 80px; 
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? "#620981" : "#FFFFFF")};
  text-shadow: ${({ isSelected }) =>
    isSelected
      ? "none"
      : "1px 1px 0 #111111, -1px -1px 0 #111111, 1px -1px 0 #111111, -1px 1px 0 #111111"};

  @media (max-width: 445px) {
    font-size: 48px;
    line-height: 60px;
  }
`;

const MobileCardText = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 24px; 
  line-height: 30px; 
  text-align: left;
  color: #111111;

  @media (max-width: 445px) {
    font-size: 20px;
    line-height: 28px;
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 725,
        settings: {
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 445,
        settings: {
          centerPadding: "5px",
        },
      },
    ],
  };

  const isMobile = useMediaQuery({ query: "(max-width: 725px)" });

  return (
    <Container>
      <ContentWrapper>
        <Header>Start your journey</Header>
        {isMobile ? (
          // Slider view for mobile
          <StyledSlider {...sliderSettings}>
            {[1, 2, 3].map((card) => (
              <MobileContainer key={card}>
                <MobileTopSection>
                  <MobileCardNumber isSelected={selectedCard === card}>
                    {card}
                  </MobileCardNumber>
                  <MobileCardText>{cardDetails[card].text}</MobileCardText>
                </MobileTopSection>
                <MobileBottomSection>
                  {cardDetails[card].bullets.map((bullet, index) => (
                    <CardBulletText key={index}>{bullet}</CardBulletText>
                  ))}
                  <CardPrice>{cardDetails[card].price}</CardPrice>
                  <CardButton isSelected={selectedCard === card}>
                    Buy now
                  </CardButton>
                </MobileBottomSection>
              </MobileContainer>
            ))}
          </StyledSlider>
        ) : (
          // Static view for larger screens
          <CardsContainer>
            {[1, 2, 3].map((card, index) => (
              <React.Fragment key={card}>
                <Card
                  onClick={() => handleCardClick(card)}
                  isSelected={selectedCard === card}
                >
                  <CardNumber isSelected={selectedCard === card}>
                    {card}
                  </CardNumber>
                  <CardText>{cardDetails[card].text}</CardText>
                  {cardDetails[card].bullets.map((bullet, idx) => (
                    <CardBulletText key={idx}>{bullet}</CardBulletText>
                  ))}
                  <CardPrice>{cardDetails[card].price}</CardPrice>
                  <CardButton isSelected={selectedCard === card}>
                    Buy now
                  </CardButton>
                </Card>
                {index < 2 && <Divider />}
              </React.Fragment>
            ))}
          </CardsContainer>
        )}
      </ContentWrapper>
    </Container>
  );
};
