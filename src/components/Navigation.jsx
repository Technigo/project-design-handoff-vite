//import styled
import styled from "styled-components";

//import reusables
import { Logo } from "../reusables/Logo";
import { Language } from "../reusables/Language";

//import hooks
import { useState } from "react";

//styles
const HeaderNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media all and (min-width: 744px) {
    padding: 24px 19px 0 19px;
  }

  @media all and (min-width: 1024px) {
    padding: 34px 124px 0 124px;
  }
`;

//hamburger styling with transitions to turn burger into x
const Hamburger = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 4;

  & > div {
    height: 3px;
    background: var(--primary-blk);
    transition: transform 0.3s, opacity 0.3s;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    & > div:nth-child(1) {
        opacity: 0; //hide the outer line
    }

    & > div:nth-child(2) {
        transform: rotate(45deg) translate(5px);
    }

    & > div:nth-child(3) {
        transform: rotate(-45deg) translate(5px)
    }

    & > div:nth-child(4) {
        opacity: 0; //hide the outer line
    }
  `}
`;

//mobile menu styling
const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  background-color: var(--secondary-blue);
  padding: 16px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 3;
  & > ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & > ul > li {
    padding: 8px 0;
    cursor: pointer;
    font-size: 12px;

    @media all and (min-width: 1024px) {
      font-size: 16px;
    }
  }
`;

//navigation links for desktop and tablet
const DesktopNavLinks = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  justify-content: center;

  @media all and (min-width: 1024px) {
    gap: 104px;
  }
`;

//to hide language selector on mobile
const LanguageWrapper = styled.div`
  @media all and (max-width: 744px) {
    display: none;
  }
`;

//component
export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderNavigation>
      {window.innerWidth >= 1024 ? <Logo type="big" /> : <Logo type="small" />}

      {window.innerWidth >= 744 ? (
        <DesktopNavLinks>
          <li>About</li>
          <li>Schedule</li>
          <li>Yoga</li>
          <li>Prices</li>
        </DesktopNavLinks>
      ) : (
        <Hamburger onClick={toggleMenu} isOpen={menuOpen}>
          <div />
          <div />
          <div />
          <div />
        </Hamburger>
      )}

      {window.innerWidth < 1024 && (
        <MobileMenu isOpen={menuOpen}>
          <ul>
            <li>About</li>
            <li>Schedule</li>
            <li>Yoga</li>
            <li>Prices</li>
          </ul>
        </MobileMenu>
      )}
      <LanguageWrapper>
        <Language />
      </LanguageWrapper>
    </HeaderNavigation>
  );
};
