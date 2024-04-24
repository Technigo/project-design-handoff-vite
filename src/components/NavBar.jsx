import styled from "styled-components";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <h2>LIFTLY</h2>
      <MobileNav src="HamburgerMenu.svg"></MobileNav>
    </StyledNavBar>
  );
};

//Styled Components

const StyledNavBar = styled.header`
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;

  h2 {
    color: #404040;
    font-weight: bold;
    font-size: 30px;
  }
`;

const MobileNav = styled.img`
  width: 83px;
  height: 83px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
