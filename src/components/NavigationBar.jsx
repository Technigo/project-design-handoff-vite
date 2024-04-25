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
  top: 0;
  left: 0;
  right: 0;
  z-index: 100; // High z-index to ensure the nav bar stays to the top
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
  padding: 32px var(--Spacing-16, 128px);
  background-color: rgba(8, 61, 86, 0.75);
  backdrop-filter: blur(2px);
  
  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 64px;
    height: 112px;
  }

  /* 
    @media (max-width: ${breakpoints.mobile}) {
      padding: 240px 64px 32px;
    } */
`;

const Logo = styled.img`
  width: 218px;
  height: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    padding-right: 48px;
    height: 64px;
  }
`;
const BurgerMenu = styled.img`
  width: 42px;
  height: 24px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
   width: 44px;
   height: 24;
  }
`;
