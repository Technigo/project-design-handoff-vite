import { useState } from "react";
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

  @media (max-width: 569px) {
    padding: 22px 16px 0 16px;
  }

  @media (max-width: 320px) {
    padding: 10px 10px 0 10px;
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

  @media (max-width: 569px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 104px;
  margin: 0;
  padding: 0;

  @media (max-width: 930px) {
    gap: 50px;
  }

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

  @media (max-width: 569px) {
    display: none;
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

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 569px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-right: 5px;

    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const DropdownMenu = styled.div`
  display: none;

  @media (max-width: 569px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 95px;
    right: 30px;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 12px;
    width: 200px;
    z-index: 3;

    a {
      text-decoration: none;
      color: #111111;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      padding: 8px 0;

      &:hover {
        background-color: #f5f5f5;
      }
    }

    @media (max-width: 375px) {
      top: 70px;
      right: 20px;
      width: 170px;
      padding: 10px;
    }
  }
`;

const DropdownLink = styled.a`
  display: block;
  text-decoration: none;
  color: #111111;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  padding: 8px 0;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
      <HamburgerIcon onClick={toggleDropdown}>
        <img src="/icons/hamburger.svg" alt="Hamburger Icon" />
      </HamburgerIcon>
      {isDropdownOpen && (
        <DropdownMenu>
          <DropdownLink href="#about">About</DropdownLink>
          <DropdownLink href="#schedule">Schedule</DropdownLink>
          <DropdownLink href="#yoga">Yoga</DropdownLink>
          <DropdownLink href="#prices">Prices</DropdownLink>
        </DropdownMenu>
      )}
    </Nav>
  );
};
