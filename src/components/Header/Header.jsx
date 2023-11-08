import { LogoDark } from "../ReusableComponents/Logo/LogoDark.jsx";
//import { BurgerMenu } from "./BurgerMenu.jsx";
//import Search from "/icons/Search.png";
//import { useTranslation } from "react-i18next";
import styled from "styled-components";

// Styled component for the header, including commented out styling for the navlinks.
const StyledHeader = styled.div`
  background: #fff6e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0; /* Stick it to the top of the viewport */
  z-index: 900; /* Ensure it appears above other content */
`;

// const Navlinks = styled.ul`
//   display: none;

//   @media screen and (min-width: 1024px) {
//     display: flex;
//     justify-content: space-evenly;
//     //flex-direction: row;
//     //width: 60%;
//   }
// `;

// const Menu = styled.div`
//   @media screen and (min-width: 1024px) {
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//   }
// `;

// const StyledSearch = styled.div``;

// const SearchBar = styled.form`
//   display: none;
//   width: 241px;
//   height: 28px;
//   padding-left: 0px;
//   justify-content: center;
//   align-items: center;
//   gap: 100px;
//   flex-shrink: 0;
//   border: 0.2px solid #000;

//   input {
//     width: 241px;
//     height: 26px;
//     background: transparent;

//     &::placeholder {
//       color: #949494;
//       font-size: 16px;
//       font-weight: 500;
//       position: absolute;
//       left: 10px;
//       top: 5px;
//     }

/* img {
      background-color: #252d32;
      width: 24px;
      height: 24px;
    } */
//   }

//   @media screen and (min-width: 1024px) {
//     display: flex;
//   }
// `;

// const SearchIcon = styled.img`
//   background-color: #252d32;
//   width: 28px;
//   height: 28px;
// `;

// const VisuallyHidden = styled.label`
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   border: 0;
// `;

// The Header component that also contain the beginning of a group of nav-links that should display in desktop, not finished and working and therefore commented out at the moment.
export const Header = () => {
  // const { t } = useTranslation();
  return (
    <StyledHeader>
      {/* <div className="logo">*/}
      <LogoDark />
      {/*</div>
      <Navlinks>
        <Menu>
          <li>
            <a href="about-us">{t("header.about")}</a>
          </li>
          <li>
            <a href="our-courses">{t("header.course")}</a>
          </li>
          <li>
            <a href="resources">{t("header.resources")}</a>
          </li>
          <li>
            <a href="shop">{t("header.shop")}</a>
          </li>
        </Menu>
      </Navlinks>
      <StyledSearch>
        <SearchBar>
          {/* Visually hidden label for accessibility purposes */}
      {/* <VisuallyHidden htmlFor="search">Searchbar</VisuallyHidden>
          <input
            type="text"
            id="search"
            name="searchbar"
            placeholder={t("header.searchbar")}
            // src={Search}
          />
          <SearchIcon />
        </SearchBar> */}
      {/*</StyledSearch> */}
      {/* <BurgerMenu /> */}
    </StyledHeader>
  );
};

// Header without translation, saved for now in case I need it
{
  /* <StyledHeader>
        <div class="logo">
          <LogoDark />
        </div>
        <ul class="nav-links">
          <BurgerMenu />
          <div class="menu">
            <li>
              <a href="about-us">About us</a>
            </li>
            <li>
            <a href="our-courses">Our cources</a>
            </li>
            <li>
              <a href="resources">Resources</a>
            </li>
            <li>
              <a href="shop">Shop</a>
            </li>
          </div>
        </ul>
    </StyledHeader>*/
}
