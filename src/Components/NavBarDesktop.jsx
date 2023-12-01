import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageDropdown } from "./Language/LanguageDropdown";

const NavBarWrapper = styled.div`
  display: flex;
  flex-direction: flex-row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 1;
`

const Logo = styled.img`
  width: 76px;
  height: 69px;
`

const MenuUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const MenuLi = styled.li`
  font-size: var(--text-size-mobile);
  font-weight: var(--text-weight);
  line-height: var(--text-height-mobile);
`

const SearchBtn = styled.button`
  padding: 10px;
  border: none;
  border-radius: var(--large-radius);
  background: #FFFFFF;
  font-family: var(--font);
  font-size: var(--heading-size-mobile);
  font-weight: var(--text-weight);
  color: var(--hover);
  display: flex;
  align-items: center;
  padding: 10px 30px;
  gap: 20px;
`
const TranslateBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`

export const NavBarDesktop = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  
  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <NavBarWrapper>
      <Link to="/"><Logo src="./images/Logo.png" alt={t("desktopNav.logo.alt")} /></Link>
      <nav>
        <MenuUl>
            <MenuLi>{t("desktopNav.videos")}</MenuLi>
            <MenuLi>{t("desktopNav.plans")}</MenuLi>
            <MenuLi>{t("desktopNav.tracker")}</MenuLi>
            <MenuLi>{t("desktopNav.fav")}</MenuLi>
        </MenuUl>
      </nav>
      
      <SearchBtn type="button">
        {t("desktopNav.search")}
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
      </SearchBtn>

      <TranslateBtn type="button" onClick={toggleDropdown}>
        <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="globe-alt">
                <path 
                    id="Icon" 
                    d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" 
                    stroke="#545F71" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </g>
        </svg>
      </TranslateBtn>
      {isVisible && <LanguageDropdown />}
    </NavBarWrapper>
      
  )
}
