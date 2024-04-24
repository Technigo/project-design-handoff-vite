import styled from "styled-components";

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
`;

const Logo = styled.img`
  width: 218px;
  height: 80px;
`;
const BurgerMenu = styled.img`
  width: 42px;
  height: 24px;
  cursor: pointer;
`;
