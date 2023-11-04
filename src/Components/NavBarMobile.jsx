import { useState } from "react";
import { Link } from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  padding: 10px;
  border: none;
  background: transparent;
`

const Logo = styled.img`
  width: 32px;
  height: 33px;
`

export const NavBarMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  return (
    <NavBarWrapper>
      <Button 
        type="button" 
        onClick={() => setIsVisible(!isVisible)}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 25" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="menu">
            <path 
              id="Icon" 
              d="M4 6.5H20M4 12.5H20M4 18.5H20" 
              stroke="#545F71" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </Button>
      {isVisible && <HamburgerMenu />}
      <Link to="/"><Logo src="./images/Logo.png" alt={t("mobileNav.logo.alt")} /></Link>
      <Button type="button">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search">
            <path 
              id="Icon" 
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" 
              stroke="#545F71" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </Button>
    </NavBarWrapper>
  )
}
    
