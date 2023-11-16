import styled from "styled-components";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import { useTranslation } from "react-i18next";
import { useState } from 'react';

// Mobile navigation styles
const MobileNav = styled.nav`
  background: rgba(85, 75, 61, 0.95);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  border-top: 5px solid var(--red-color);
  @media (min-width: 667px) {
    display: none;
  }
`;

// Mobile navigation list styles
const AppUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  padding: 0;
`;

// Mobile navigation list item styles
const AppLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

// Active link styles for mobile navigation
const ActiveLink = styled(Link)`
  svg {
    fill: white;
    transition: fill 0.3s;
  }

  &:active svg,
  &.active svg,
  &:visited svg,
  &.active:visited svg {
    fill: var(--yellow-color);
  }
`;

// Image icons styles for mobile navigation
const ImgIcons = styled.div`
  color: white;

  @media (min-width: 667px) {
    display: none;
  }
`;

// Hamburger menu icon styles
const HamburgerMenu = styled(HamburgerIcon)`
  display: none;

  @media (min-width: 667px) {
    display: block;
    padding: 10px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
`;

// Desktop navigation styles
const DesktopNav = styled.nav`
  @media (min-width:667px) {
    background: #E5E5E5;
    position: fixed;
    top: 0;
   right: 0;
    width: 350px; 
    z-index: 100;
  }
`;

// Desktop navigation list styles
const AppUlDesktop = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0; 
  font-family:var(--heading-font-family);/* Add margin: 0 to remove the default margin for ul */
  text-align: center;
  `;

// Desktop navigation list item styles
const AppLiDesktop = styled.li`
  display: flex;
  flex-direction: column;
  padding: 22px 25px 16px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  cursor: pointer;
  background-color: #fff; /* Default background color */
  box-shadow: 0px 4px 4px 0px #2aa9c0; /* Default box shadow */

  &:not(:last-child) {
    margin-bottom: 10px; /* Add margin-bottom only for elements that are not the last child */
  }

  &:hover {
    background-color: #eff4f8; /* Background color on hover */
  }

  a {
    text-decoration: none;
    color: #000; 
  }
  &:active{
    color: red;
  }
`;

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation("menu");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile navigation */}
      <MobileNav>
        <AppUl className="app-ul">
          <AppLi className="app-li">
            <ActiveLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="30"
                viewBox="0 0 35 30"
                fill="none"
              >
                <path d="M7.67126 30H27.3439C29.4715 30 30.7152 28.8588 30.7152 26.8474V13.8231L32.6477 15.5064C32.9625 15.7917 33.3071 15.9914 33.7266 15.9914C34.4308 15.9914 35 15.5777 35 14.893C35 14.4651 34.8352 14.194 34.5508 13.9515L29.3515 9.42935V1.02711C29.3515 0.3994 28.932 0 28.2729 0H26.31C25.6657 0 25.2163 0.3994 25.2163 1.02711V5.84875L19.298 0.713283C18.7736 0.256792 18.1443 0 17.5001 0C16.8558 0 16.2265 0.256792 15.7021 0.713283L0.449472 13.9515C0.179827 14.194 0 14.4651 0 14.893C0 15.5777 0.569335 15.9914 1.27356 15.9914C1.70807 15.9914 2.05264 15.7917 2.35233 15.5064L4.2851 13.8373V26.8474C4.2851 28.8588 5.52868 30 7.67126 30ZM21.8151 18.2311C21.8151 17.5749 21.3657 17.1612 20.6765 17.1612H14.3237C13.6345 17.1612 13.17 17.5749 13.17 18.2311V27.7033H8.1807C7.22179 27.7033 6.69739 27.204 6.69739 26.2767V11.7403L16.9757 2.82452C17.1255 2.68186 17.3053 2.59628 17.5001 2.59628C17.6948 2.59628 17.8746 2.66761 18.0395 2.82452L28.3027 11.7403V26.2767C28.3027 27.204 27.7783 27.7033 26.8345 27.7033H21.8151V18.2311Z" />
              </svg>
            </ActiveLink>
          </AppLi>
          <AppLi className="app-li">
            <ImgIcons>
              <img src="./calendar.svg" alt="Calendar" />
            </ImgIcons>
          </AppLi>
          <AppLi className="app-li">
            <ActiveLink to="/information">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="30"
                viewBox="0 0 25 30"
                fill="none"
              >
                <path d="M7.66376 2.80824C7.66376 4.35763 9.6415 5.59714 12.1137 5.59714C14.6168 5.59714 16.5636 4.35763 16.5328 2.80824C16.5328 1.23951 14.6168 0 12.1137 0C9.6415 0 7.66376 1.23951 7.66376 2.80824ZM0 28.4119C0 29.3609 1.08169 30 2.7194 30H22.2805C23.9183 30 25 29.3609 25 28.4119C25 27.4823 23.9183 26.8431 22.2805 26.8431H16.0692V12.0658C16.0692 11.02 14.9876 10.3228 13.3808 10.3228H3.58473C1.97774 10.3228 0.89618 10.9426 0.89618 11.8721C0.89618 12.8405 1.97774 13.4797 3.58473 13.4797H10.3523V26.8431H2.7194C1.08169 26.8431 0 27.4823 0 28.4119Z" />
              </svg>
            </ActiveLink>
          </AppLi>
          <AppLi className="app-li">
            <ImgIcons>
              <img src="./contact.svg" alt="Contact" />
            </ImgIcons>
          </AppLi>
        </AppUl>
      </MobileNav>

      {/* Desktop navigation */}
      <DesktopNav open={isMenuOpen}>
        <HamburgerMenu onClick={toggleMenu} />
        {isMenuOpen && (
          <>
            <AppUlDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('home')}</ActiveLink> </AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('my account')}</ActiveLink></AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/information">{t('information')} </ActiveLink> </AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('technology edge')}</ActiveLink></AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('competitive edge')}</ActiveLink></AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('comeback edge')}</ActiveLink></AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('coaching edge')}</ActiveLink></AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('winning edge')}</ActiveLink></AppLiDesktop>
              <AppLiDesktop onClick={toggleMenu}><ActiveLink to="/"> {t('our athletes')}</ActiveLink></AppLiDesktop>
            </AppUlDesktop>
          </>
        )}
      </DesktopNav>
    </>
  );
};
