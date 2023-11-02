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
  @media (min-width: 1440px) {
    padding: 1.25vh 3.69vh 1.25vh 3.69vh;
  }
`;

export const Logo = styled.div`

`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
`;

export const MobileNav = styled.nav`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: #ffcc00;
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

export const Hamburger = styled.div`
  cursor: pointer;
  z-index: 1000;
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  @media(min-width: 1440px) {
    margin: 4.8vh 7vh 0 7vh;
  }
`;

export const HeroWrapper = styled.section`
  color: red;
  text-align: center;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-width: 1440px) {
    height: 43vh;
    margin-bottom: 2.25vh;
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

/* SHOULD NOT BE USED? */
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
@media(min-width: 1440px) {
  padding: 2vh 7vh 0vh 7vh;
}
`;
