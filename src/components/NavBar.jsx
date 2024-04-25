import styled from "styled-components";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <h2>LIFTLY</h2>
      <MobileNav src="HamburgerMenu.svg"></MobileNav>
      <DesktopNav>
        <p>ABOUT US</p>
        <p>SEARCH</p>
        <p>SIGN IN</p>
      </DesktopNav>
    </StyledNavBar>
  );
};

//Styled Components

const StyledNavBar = styled.header`
  max-width: 100vw;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;

  @media screen and (min-width: 834px) {
    height: 52px;
    margin: 0 32px;
  }

  h2 {
    color: #404040;
    font-weight: bold;
    font-size: 30px;
  }
`;

const MobileNav = styled.img`
  width: 83px;
  height: 83px;

  @media screen and (min-width: 834px) {
    display: none;
  }
`;

const DesktopNav = styled.div`
  display: none;

  @media screen and (min-width: 834px) {
    display: flex;
    gap: 10px;

    p {
      padding: 10px;
    }
  }
`;
