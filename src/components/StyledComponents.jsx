import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import HeroBg from '../images/hero-image-1440.png';
import HamburgerIcon from './HamburgerIcon';

export const PageWrapper = styled.div`
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
  background-color: aquamarine;
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
`;

export const MobileNav = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #602C9E;
  color: white;
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
  padding-top: 1vh;

  @media (min-width: 1440px) {
    padding: 4.8vh 7vh 0vh 7vh;
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
    background-position: 50% 50%;
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
  background-color: darkorange;
    
    @media(min-width: 834px) {
      font-size: 3rem;
      line-height: 4.75rem;
      letter-spacing: 0.00625rem;
    }
    
    @media(min-width: 1440px) {
      font-size: 4.5rem;
      line-height: 7.25rem;
      padding: 4.8vh 1.25vh 4.8vh 1.25vh;
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
    background-color: yellow;
  }
`;

export const HeroBookButton = styled.button`
  display: none;
  @media(min-width: 1440px) {
    display: block;
  }
`;

export const HeroBookButtonWrapper = styled.section`
  display: none;
  @media(min-width: 1440px) {
    display: block;
    padding: 0vh 1.25vh 0vh 1.25vh;
    text-align: left;
    background-color: powderblue;
  }
`;

export const BenefitsWrapper = styled.section`
  color: #602C9E;
  
  @media(min-width: 834px) {
    padding-top: 2.75vh;
  }
`;

export const BenefitsHeader = styled.section`
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  background-color: orange;

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
  padding: 0px;
`;

export const BenefitsCarouselCard = styled.div`
  background-color: darkgreen;
  padding: 0;
`;

export const BenefitsCarouselCardImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

export const BenefitsCarouselCardTitle = styled.h3`
  margin: 0;
  background-color: plum;
`;

export const BenefitsCarouselCardContent = styled.p`
  margin: 0;
  background-color: lime;
`;

export const TestimoniesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  background-color: yellow;

  @media(min-width: 834px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-top: 2.75vh;
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
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  background-color: orange;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }

  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const ClassesWrapper = styled.section`
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  background-color: orange;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }

  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const StudioWrapper = styled.section`
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  background-color: orange;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }

  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const BookWrapper = styled.section`
  text-align: center;
  font-size: 1.25rem;
  font-style: normal;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  background-color: orange;

  @media(min-width: 834px) {
    font-size: 2.0625rem;
  }

  @media(min-width: 1440px) {
    font-size: 4.5rem;
    line-height: normal;
  }
`;

export const NavLink = styled.li`
  list-style-type: none;
  margin: 0 30px;
`;

export const NavList = styled.ul`
  display: none;
  @media(min-width: 1440px) {
    display: flex;
  }
`;

export const BookButton = styled.button`
  display: none;
  @media(min-width: 1440px) {
    display: block;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: magenta;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.00625rem;
  text-align: left;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #602C9E;
  padding: 2vh;
`;

export const Link = styled(RouterLink)`
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