import { useState } from "react";
import styled from "styled-components";

export const NavBar = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <StyledNavBar>
      <h2>LIFTLY</h2>
      <MobileNav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
          <div className={burgerClass}></div>
        </div>

        {/* {" "}
        <img src="HamburgerMenu.svg" /> */}
      </MobileNav>
      <DesktopNav>
        <nav className={menuClass}>
          <ul className="menu-list">
            <li>ABOUT US</li>
            <li>SEARCH</li>
            <li>SIGN IN</li>
          </ul>
        </nav>
      </DesktopNav>
    </StyledNavBar>
  );
};

//Styled Components

const StyledNavBar = styled.header`
  max-width: 100vw;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;

  @media screen and (min-width: 834px) {
    height: 52px;
    margin: 0 32px;
  }
  @media screen and (min-width: 1440px) {
    height: 57px;
    margin: 0 128px;
  }

  h2 {
    color: #404040;
    font-weight: bold;
    font-size: 30px;
  }
`;

const MobileNav = styled.div`
  /* width: 83px;
  height: 83px; */

  .burger-menu {
    height: 20%;
    width: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    /* align-items: flex-start; */
    justify-content: space-between;
    cursor: pointer;
  }

  .burger-bar {
    width: 50px;
    height: 3px;
    background-color: #000;
    border-radius: 0.5em;
  }

  .burger-bar.clicked:nth-child(1) {
    transform: rotate(45deg) translate(0.6em, 1.2em);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(2) {
    transform: scale(0.1);
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(3) {
    transform: rotate(130deg) translate(-0.5em, 1em);
    transition: ease-out 0.5s;
  }
  .burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }

  @media screen and (min-width: 834px) {
    display: none;
  }
`;

const DesktopNav = styled.div`
  .menu {
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 83px;
    left: 0;
  }

  .hidden {
    display: none;
  }

  .visible {
    display: inherit;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    color: #fff;
    align-items: center;
  }

  @media screen and (min-width: 834px) {
    .menu {
      top: 0;
      left: 63%;
      background-color: transparent;
    }

    .menu-list {
      color: #000;
      flex-direction: row;
    }

    .hidden {
      display: inherit;
    }

    ul {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    li {
      padding: 10px;
    }
  }
`;
