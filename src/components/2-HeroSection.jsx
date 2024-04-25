import styled from "styled-components";
import heroPhone from "/src/assets/images/HeroPhone.png";
import heroTablet from "/src/assets/images/HeroTablet.png";
import heroDesktop from "/src/assets/images/HeroDesktop.png";
import arrowDown from "/src/assets/arrowDown.png";
import { CtaButton } from "./CTA-button.jsx";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>
        <HeaderText>Ready to sweat?</HeaderText>
        <InfoText>
          The world-famous spinning club is now ready for you in Gothenburg!
        </InfoText>
        <CtaButton>Book Now</CtaButton>
      </HeroText>
      <ArrowIcon
        src={arrowDown}
      />
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background-image: url(${heroPhone});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: span 4;
  margin-left: -16px;
  margin-right: -16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 150px;

  @media (min-width: 744px) and (max-width: 1493px) {
    background-image: url(${heroTablet});
    grid-column: span 8;
    margin-left: -32px;
    margin-right: -32px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 210px;
  }

  @media (min-width: 1494px) {
    background-image: url(${heroDesktop});
    grid-column: span 12;
    margin-left: -128px;
    margin-right: -128px;
    padding-left: 128px;
    padding-right: 128px;
    padding-top: 320px;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 180px;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-weight: 150;
`;

const InfoText = styled.h2`
  text-align: center;
  color: white;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: -20px;
  padding-bottom: 30px;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 30px;

  @media (min-width: 744px) and (max-width: 1493px) {
    margin-left: 32px;
    margin-right: 32px;
    margin-top: -90px;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 50px;
  }

  @media (min-width: 1494px) {
    margin-left: 128px;
    margin-right: 128px;
    margin-top: -90px;
    margin-bottom: 10px;
    font-weight: 450;
    font-size: 36px;
  }
`;

const ArrowIcon = styled.img`
  display: none;
  @media (min-width: 1494px) {
    display: block;
    margin-bottom: 150px;
    padding-top: 90px;
  }
`;


