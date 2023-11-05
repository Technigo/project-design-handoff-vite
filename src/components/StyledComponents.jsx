import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import HeroBg from '../images/hero-image-1440.png';
import HamburgerIcon from './HamburgerIcon';

export const PageWrapper = styled.div`
  font-family:
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #602C9E;
  padding: 2vh;
`;

export const Logo = styled.div`
  text-align: justify;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  font-family:
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
`;

export const MobileNav = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #E9C9AF;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  gap: 15px;
  @media (max-width: 1440px) {
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

export const Hamburger = styled(HamburgerIcon)`
  cursor: pointer;
  z-index: 1000;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  padding: 1vh 0vh 1vh 0vh;

  @media (min-width: 1440px) {
    padding: 4.8vh 7vh 4.8vh 7vh;
  }
`;

export const HeroWrapper = styled.div`
  color: #602C9E;
`;

export const HeroImage = styled.section`
  background-image: url(${HeroBg});
  background-size: cover;
  background-position: 50% 40%;
  background-repeat: no-repeat;
  height: 100vw;
  color: transparent;
  @media (min-width: 1440px) {
    background-position: 50% 60%;
    height: 75vh;
    color: #602C9E;
    text-align: center;
    font-size: 4.5rem;
  }
`;

export const HeroImageText = styled.div`
  color: transparent;
  @media (min-width: 1440px) {
    color: #602C9E;
    text-align: center;
    font-size: 4.5rem;
    position: absolute;
    top: 65%;
    left: 40%;
    transform: translate(-60%, -90%);
    span {
      display: block;
      display: flex;
      padding: 0.625rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
    }
  }
`;

export const HeroHeader = styled.section`

  display: block;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  span {
    display: block;
  }
  padding: 4.8vh 1.25vh 4.8vh 1.25vh;
    
    @media(min-width: 834px) {
      font-size: 3rem;
      line-height: 4.75rem;
      letter-spacing: 0.00625rem;
    }
    
    @media(min-width: 1440px) {
      font-size: 4.5rem;
      line-height: 7.25rem;
    }
  `;

export const HeroText = styled.section`
  display: none;
  @media(min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    font-size: 2.25rem;
    flex-direction: row;
    gap: 4.8vh;
    padding: 4.8vh 1.25vh 4.8vh 1.25vh;
  }
`;

export const BenefitsWrapper = styled.section`
  color: #602C9E;
`;

export const BenefitsHeader = styled.section`
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  padding: 4.8vh 1.25vh 4.8vh 1.25vh;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }
  
  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const BenefitsCarouselWrapper = styled.div`
  @media(max-width: 833px) {
    display: none;
  }
`;

export const BenefitsCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media(min-width: 834px) {
    display: none;
  }
`;

export const BenefitsCarouselCardContainer = styled.div`
  
`;

export const BenefitsCarouselCard = styled.div`
  padding: 2vh;
  margin: 2vh;
`;

export const BenefitsCarouselCardImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const BenefitsCarouselCardTitle = styled.h3`
  padding: 1.5vh;
`;

export const BenefitsCarouselCardContent = styled.p`
  padding: 0 1.5vh 0 1.5vh;
`;

export const TestimoniesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 8vh;

  @media(min-width: 834px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const TestimonyCard = styled.div`
  padding: 2.3rem;
  order: ${props => props.order || 0};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1.625rem;
  color: #865025;

  @media(min-width: 834px) {
    padding: 4rem;
    font-size: 1.5rem;
  }
`;

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 834px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2vh;
  }
`;

export const AboutHeader = styled.h2`
  color: #602C9E;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 109.091% */
  letter-spacing: 0.00625rem;
  grid-column: span 2;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }
  
  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const AboutCard = styled.div`
  padding: 1.5vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  text-align: center;
  color: #865025;

  img {
    width: 100%;
  }  

  h3 {
    font-size: 1.25rem;
    margin-bottom: 3vh;
  }

  @media (min-width: 834px) {
    padding: 4rem;
    font-size: 1.5rem;
    h3 {
      line-height: normal;
    }
  }

  @media (min-width: 1440px) {

    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4375rem;
    letter-spacing: -0.033rem;

    h3 {
      font-size: 4.5rem;
    }
  }
`;

export const ClassesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 834px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2vh;
  }
`;

export const ClassesHeader = styled.h2`
  color: #602C9E;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 109.091% */
  letter-spacing: 0.00625rem;
  grid-column: span 2;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }
  
  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const StudioWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 834px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2vh;
  }
`;

export const StudioHeader = styled.h2`
  color: #602C9E;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 109.091% */
  letter-spacing: 0.00625rem;
  grid-column: span 2;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }
  
  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const BookWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media(min-width: 834px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    gap: 2vh;
  }
`;

export const BookHeader = styled.h2`
  color: #602C9E;
  text-align: center;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem; /* 109.091% */
  letter-spacing: 0.00625rem;
  grid-column: span 2;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }
  
  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const ButtonWrapper = styled.section`
    color: #602C9E;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.75vh;
`;

export const NavLink = styled.li`
  list-style-type: none;
  margin: 0 30px;
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: none;
  @media(min-width: 1440px) {
    display: flex;
  }
`;

export const BookButton = styled.button`
  display: inline-block;
  border-radius: 1.25rem;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-style: normal;s
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01238rem;
  color: #F4E4D7;
  background-color: #865025;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;

export const FooterWrapper = styled.footer`
  background-color: #E9C9AF;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  text-align: left;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: left;
  color: #602C9E;
  padding: 2vh;
  span {
    display: block;
    display: flex;
    font-size: 0.75rem;
    font-weight: 300;
    line-height: 1rem;
    letter-spacing: 0.00625rem;
    margin: 0.6rem 0rem 0.6rem 0rem;
  }

  @media (min-width: 1440px) {
    padding: 4.8vh 7vh 4.8vh 7vh;
    font-weight: 400;
  }
`;

export const StyledLink = styled(RouterLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  &:visited, &:hover, &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  left: 2%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  padding: 2%;
`;

export const NextArrow = styled.div`
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  cursor: pointer;
  padding: 2%;
`;

export const SocialIconLink = styled.div`
  
`;

export const LanguageButton = styled.button`
  background-color: transparent;
  border-radius: 0.3125rem;
  border: 2px solid #602C9E;
  color: #602C9E;
  padding: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
`;

