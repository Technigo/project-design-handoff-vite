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
  padding: 1.25vh 3.69vh 1.25vh 3.69vh;
`;

export const Logo = styled.div`
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: 0.00625rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
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
  margin: 4.8vh 0 0 0;

  @media (min-width: 1440px) {
    margin: 4.8vh 7vh 0 7vh;
}
`;

export const HeroWrapper = styled.div``;

export const HeroImage = styled.section`
  color: red;
  text-align: center;
  background-image: url(${HeroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vw;
  margin-bottom: 2.25vh;

  @media (min-width: 1440px) {
    height: 43vh;
}
`;

export const HeroHeader = styled.section``;

export const HeroText = styled.section``;

export const HeroBookButton = styled.button`
  display: none;
  @media(min-width: 1440px) {
    display: block;
  }
`;

export const AboutUsWrapper = styled.section`
  background-color: #ff0000;
  text-align: left;
`;

export const BenefitsWrapper = styled.section`
  background-color: #33DD00;
  text-align: left;
`;

export const BenefitsHeader = styled.section`
  text-align: center;
`;

export const ContentSection = styled.section`
  background-color: #446699;
  text-align: left;
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
  background-color: #E9C9AF;
  text-align: left;
  margin-top: auto;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
