import styled from 'styled-components';
import { FacebookIcon } from '../ui/Facebook';
import { InstagramIcon } from '../ui/Instagram';
import { Icon } from '../ui/Icon';
import {
  FooterTitle,
  FooterText,
  FooterSectionTitle,
  FooterContactInfo
} from '../ui/Typography';

const FooterContainer = styled.footer`
  background-color: #FFCAF8; 
  padding: 2rem 1rem;
  text-align: left;
  color: black;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-left: -24px;

  & > img {
    height: 120px;
    width: auto;
    max-width: 100%;
    max-height: 120px;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-top: 1.5rem;
`;
const FooterTextContainer = styled.div`
max-width: 700px;
display: flex;
flex-direction: column;
`

export const FooterSection = () => {
  return (
    <FooterContainer>
      <FooterTextContainer>
        <LogoContainer>
          <Icon src="/assets/HeaderSun.png" alt="Kindness & Compassion logo" size="60px" />
        </LogoContainer>
        <FooterTitle>Kindness & Compassion</FooterTitle>
        <FooterText>
          Vi vill skapa en vänligare och mer inkluderande värld genom att skapa mötesplatser där människor kan mötas och prata om det som är viktigt på riktigt.
        </FooterText>
        <FooterText>
          Samtidigt skapar vi en rörelse av goda handlingar människor emellan för att sprida vänlighet, värme och hopp!
        </FooterText>
        <FooterSectionTitle>Om oss</FooterSectionTitle>
        <FooterText>Vår Vision</FooterText>
        <FooterText>Rörelsen Pay it forward</FooterText>
        <FooterSectionTitle>Engagera dig</FooterSectionTitle>
        <FooterText>Bli volontär</FooterText>
        <FooterText>Hitta din stödgrupp</FooterText>
        <FooterSectionTitle>Kontakta oss</FooterSectionTitle>
        <FooterContactInfo>info@kindnessandcompassion.se</FooterContactInfo>

        <SocialIconsContainer>
          <FacebookIcon />
          <InstagramIcon />
        </SocialIconsContainer>
      </FooterTextContainer>
    </FooterContainer>
  );
};
