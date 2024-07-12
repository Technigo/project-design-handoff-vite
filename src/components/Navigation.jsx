import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 124px 0 124px;
  background: none;
  margin: 0 auto;
  flex-wrap: nowrap; 

  @media (max-width: 1070px) {
    padding: 34px 24px 0 24px;
  }

  @media (max-width: 375px) {
    padding: 16px 16px 0 16px;
  }
`;

const Logo = styled.div`
  img {
    height: 84.5px;

    @media (max-width: 744px) {
      height: 56px;
    }
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  @media (max-width: 744px) {
    margin-top: 16px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 104px;
  margin: 0;
  padding: 0;

  @media (max-width: 744px) {
    gap: 40px;
  }

  @media (max-width: 375px) {
    gap: 20px;
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: #111111;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;

    @media (max-width: 744px) {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

const LanguageSelector = styled.a`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  color: #111111;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
    margin-right: 12px;
  }

  @media (max-width: 744px) {
    font-size: 12px;
    line-height: 18px;

    img {
      width: 17px;
      height: 17px;
    }

    margin-top: 16px;
    margin-left: auto;
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <Logo>
        <img src="/logos/primary-big.png" alt="Logo" />
      </Logo>
      <NavLinksContainer>
        <NavLinks>
          <NavLink>
            <a href="#about">About</a>
          </NavLink>
          <NavLink>
            <a href="#schedule">Schedule</a>
          </NavLink>
          <NavLink>
            <a href="#yoga">Yoga</a>
          </NavLink>
          <NavLink>
            <a href="#prices">Prices</a>
          </NavLink>
        </NavLinks>
      </NavLinksContainer>
      <LanguageSelector href="#language">
        <img src="/icons/globe.svg" alt="Language Icon" />
        English
      </LanguageSelector>
    </Nav>
  );
};
