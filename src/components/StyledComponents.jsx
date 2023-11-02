import styled from 'styled-components';
import HeroImage from '../images/hero-image-1440.png';

export const HeaderWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #F8F5F1;
  padding: 1.25% 5% 1.25% 5%;
  color: #333;
`;

export const Logo = styled.div`
  font-size: 1.5em;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  font-size: 1.2em;
  margin-right: 15px;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  cursor: pointer;
  @media(min-width: 1440px) {
    display: none;
  }
`;

export const ContentSection = styled.section`
  padding: 1em;
  max-width: 100%;
  margin: 0 auto;
  @media(min-width: 1440px) {
    max-width: 85%;
  }
`;

export const HeroSection = styled.section`
  padding: 3em;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  text-align: center;
  font-size: 2em;
  @media(min-width: 1440px) {
    margin: 3% 7% 3% 7%;
    display: block;
  }
`;

export const NavLink = styled.li`
  list-style-type: none;
  margin: 0 10px;
`;

export const NavList = styled.ul`
  display: none;
  @media(min-width: 1440px) {
    display: flex;
  }
`;

export const BookButton = styled.button`
  border-radius: 1.25rem;
  background: #E9C9AF;
  color: #333;
  border: none;
  cursor: pointer;
  display: none;
  @media(min-width: 1440px) {
    display: inline-block;
  }
`;

export const FooterWrapper = styled.footer`
  background-color: #E9C9AF;
  color: #333;
  text-align: left;
  padding: 0.625% 7% 3% 7%;
`;
