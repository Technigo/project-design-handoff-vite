import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 34px 124px 0 124px;
  background: none;

  @media (max-width: 744px) {
    padding: 34px 24px 0 24px;
  }

  @media (max-width: 375px) {
    padding: 16px 16px 0 16px;
  }
`;

const Logo = styled.div`
  img {
    height: 84.5px;
    margin-right: 10px; /* Should be 126px here according to template */

    @media (max-width: 744px) {
      height: 56px;
      margin-right: 0;
    }
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 104px;

  @media (max-width: 744px) {
    gap: 40px; /* Should be 77px here according to template */
  }
`;

const NavLink = styled.li`
  a {
    text-decoration: none;
    color: inherit;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  margin-left: 71px;

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
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <Logo>
        <img src="/logos/primary-big.png" alt="Logo" />
      </Logo>
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
      <LanguageSelector href="#language">
        <img src="/icons/globe.svg" alt="Language Icon" />
        English
      </LanguageSelector>
    </Nav>
  );
};
