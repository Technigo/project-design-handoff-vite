import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MenuContainer = styled.nav`
  height: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  nav {
    position: absolute;
    background-color: #ffffff;
    font-size: 10px;
    font-weight: 600;
    padding: 15px;
    text-transform: uppercase;
  }

  li {
    padding: 3px 0;
    img {
      width: 10px;
      height: 10px;
      margin-left: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #585858;
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
    background-color: transparent;
  }

  .menu-icon {
    width: 32px;
    height: 32px;
  }
  .logo {
    width: 50px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    .menu-icon {
      width: 48px;
      height: 48px;
    }
  }

  @media screen and (min-width: 1024px) {
    .menu-icon {
      width: 64px;
      height: 64px;
    }
  }
`;

export const Menu = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const [menuVisible, setMenuVisible] = useState(false); // Create a state variable to track whether the menu is visible or not
  return (
    <MenuContainer>
      <button onClick={() => setMenuVisible(!menuVisible)}>
        {" "}
        {/* Toggle the menuVisible state variable when the button is clicked */}
        <img src="/menu-duo.svg" className="menu-icon" alt="Menu" />
      </button>

      {menuVisible && ( // Only render the menu if the menuVisible state variable is true
        <nav>
          <ul>
            <li>
              <Link to={"/"}>
                {" "}
                {/* Use the Link component from react-router-dom to link to the home page */}
                <span>{t("homePage.heroSection.menu.home")}</span>
                <img src="/gt.svg"></img>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <span>{t("homePage.heroSection.menu.book")}</span>
                <img src="/gt.svg"></img>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <span>{t("homePage.heroSection.menu.classes")}</span>
                <img src="/gt.svg"></img>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <span>{t("homePage.heroSection.menu.instructors")}</span>
                <img src="/gt.svg"></img>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                {" "}
                {/* Use the Link component from react-router-dom to link to the about page */}
                <span>{t("homePage.heroSection.menu.about")}</span>
                <img src="/gt.svg"></img>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <span>{t("homePage.heroSection.menu.contact")}</span>
                <img src="/gt.svg"></img>
              </Link>
            </li>
            <li>
              <Link to={"#"}>
                <span>{t("homePage.heroSection.menu.faq")}</span>
                <img src="/gt.svg"></img>
              </Link>
            </li>
          </ul>

          <img src="/logo.svg" className="logo" alt="Logo" />
        </nav>
      )}
    </MenuContainer>
  );
};
