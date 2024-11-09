import styled from "styled-components";
import kennelLogo from "/public/assets/logo-images/kennel-logo.svg";


// Main header container
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 65px;
  flex-shrink: 0;
`;

// Lef logo image container
const Logo = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
`;

// Menus container
const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;


// "hamburger" container
const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 23px 21px;
  width: 48.432px;
  gap: 20px; 
  align-items: center;
  flex-shrink: 0;
`;

const Line = styled.svg`
  width: 51px;
  height: 2px;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      {/* Logo en SVG a la izquierda */}
      <Logo>
        <img src={kennelLogo} alt="Logo" />
      </Logo>

      {/* Right menu */}
      <MenuContainer>

        {/* "hamburger" Icon*/}
        <HamburgerIcon>
          {/* Secondary line hamburger icon */}
          <Line xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 2" fill="none">
            <path
              d="M1 1H49.4316"
              stroke="#EFDFC5"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </Line>

          {/* Secondary line hamburger icon */}
          <Line xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51 2" fill="none">
            <path
              d="M1 1H49.4316"
              stroke="#EFDFC5"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </Line>
        </HamburgerIcon>
      </MenuContainer>
    </HeaderContainer>
  );
};
