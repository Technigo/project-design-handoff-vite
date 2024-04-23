import styled from 'styled-components';
import heroPhone from '/src/assets/images/HeroPhone.png';
import heroTablet from '/src/assets/images/HeroTablet.png';
import heroDesktop from '/src/assets/images/HeroDesktop.png'
import { CtaButton } from './CTA-button.jsx'

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

  @media (min-width: 744px) and (max-width: 1493px) {
    background-image: url(${heroTablet});
    grid-column: span 8;
    margin-left: -32px;
    margin-right: -32px;
  }

  @media (min-width: 1494px) {
    background-image: url(${heroDesktop});
    grid-column: span 12;
    margin-left: -128px;
    margin-right: -128px;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
  padding-top: 130px;
`;

const HeaderText = styled.h1`
  text-align: center;
  font-weight: 150;
`;

const InfoText = styled.h2`
  text-align: center;
  color: white;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: -20px;
  padding-bottom: 30px;
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 744px) and (max-width: 1493px) {
    margin-left: 120px;
    margin-right: 120px;
    margin-top: -90px;
    font-weight: 400;
    font-size: 32px;
  }

  @media (min-width: 1494px) {
    margin-left: 220px;
    margin-right: 220px;
    margin-top: -90px;
    margin-bottom: 10px;
    font-weight: 450;
    font-size: 36px;
  }
`;

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
    </HeroContainer>
  );
};
