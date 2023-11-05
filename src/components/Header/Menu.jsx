import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const MenuContainer = styled.nav`
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
    width: 20px;
    height: 20px;
  }
  .logo {
    width: 50px;
    display: flex;
    justify-content: center;
  }

  ul {
    padding-bottom: 30px;
  }
`;

export const Menu = () => {
  const { t } = useTranslation(); // Use useTranslation to get the 't' function from i18next

  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <MenuContainer>
      <button onClick={() => setMenuVisible(!menuVisible)}>
        <img src="/menu-duo.svg" className="menu-icon" alt="Menu" />
      </button>

      {menuVisible && (
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>{t("homePage.heroSection.menu.home")}</span>{" "}
                <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>{t("homePage.heroSection.menu.book")} </span>
                <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>{t("homePage.heroSection.menu.classes")}</span>{" "}
                <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>{t("homePage.heroSection.menu.instructors")}</span>{" "}
                <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>{t("homePage.heroSection.menu.about")}</span>{" "}
                <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>{t("homePage.heroSection.menu.contact")}</span>{" "}
                <img src="/gt.svg"></img>
              </a>
            </li>
            <li>
              <a href="#">
                <span>{t("homePage.heroSection.menu.faq")}</span>{" "}
                <img src="/gt.svg"></img>
              </a>
            </li>
          </ul>

          <img src="/logo.svg" className="logo" alt="Logo" />
        </nav>
      )}
    </MenuContainer>
  );
};
