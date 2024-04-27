import styled from "styled-components";
import { breakpoints } from "../utility/breakpoints";

export const NavigationBar = () => {
  return (
    <Navbar>
      <Logo src="/icons/logo.svg" alt="Logo Image"></Logo>
      <BurgerMenu src="/icons/burger-menu.png" alt="Burger Menu" />
    </Navbar>
  );
};

const Navbar = styled.nav`
  position: absolute;
  height: 88px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; // High z-index to ensure the nav bar stays to the top
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  padding: 16px 32px;
  background-color: rgba(8, 61, 86, 0.75);
  backdrop-filter: blur(2px);
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 24px 64px;
  }
 
  @media (min-width: ${breakpoints.desktop}) {
    padding: 32px var(--Spacing-16, 128px);
    } 
`;

const Logo = styled.img`
height: 44px;

  @media (min-width: ${breakpoints.tablet}) {
    padding-right: 48px;
    height: 64px;
    width: 208px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding-right: 48px;
    height: 80px;
    width: 218px;
    
  }
`;
const BurgerMenu = styled.img`
  width: 32px;
  height: 24px;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}) {
   width: 40px;
   height: 24px;
  }

  @media (min-width: ${breakpoints.desktop}) {
   width: 42px;
   height: 24px;
  }
`;
