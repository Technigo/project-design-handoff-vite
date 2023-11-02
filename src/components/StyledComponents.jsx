import styled from 'styled-components';
import HeroImage from '../images/hero-image-1440.png';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffcc00;
`;

export const Logo = styled.div`

`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`;

export const Icon = styled.span`

`;

export const Hamburger = styled.div`
  @media(min-width: 1440px) {
    display: none;
  }
`;

export const HeroWrapper = styled.section`
  background-color: #FFFF00;
  text-align: left;
`;

export const AboutUsWrapper = styled.section`
  background-color: #998800;
  text-align: left;
`;

export const BenefitsWrapper = styled.section`
  background-color: #33DD00;
  text-align: left;
`;

export const ContentSection = styled.section`
  background-color: #fff;
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
