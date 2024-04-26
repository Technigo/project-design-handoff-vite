import styled from "styled-components";

export const NavBar = () => {
  return (
    <StyledNavBar>
      <h2>LIFTLY</h2>
      <MobileNav>
        <span className="hambuger-bar"/>
        <span className="hambuger-bar"/>
        <span className="hambuger-bar"/>
      </MobileNav>
      <DesktopNav>
        <nav>
        <ul>
        <li>ABOUT US</li>
        <li>SEARCH</li>
        <li>SIGN IN</li>
        </ul>
        </nav>
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
  @media screen and (min-width: 1440px) {
    height: 57px;
    margin: 0 128px;
  }

  h2 {
    color: #404040;
    font-weight: bold;
    font-size: 30px;
  }
`;

const MobileNav = styled.div`
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

    ul{
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    li {
      padding: 10px;
    }
  }
`;
