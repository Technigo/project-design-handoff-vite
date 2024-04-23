import styled from "styled-components";

export const NavBar = () => {
  return (
    <StyledNavBar>
      LIFTLY<MobileNav src="HamburgerMenu.svg"></MobileNav>
    </StyledNavBar>
  );
};

//Styled Components

const StyledNavBar = styled.div`
  height: 83px;
  color: #404040;
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 11px;
`;

const MobileNav = styled.img`
  width: 83px;
  height: 83px;
`;
