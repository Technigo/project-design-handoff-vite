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

  .burger-menu {
    position: absolute;
    gap: 6px;
    right: 50px;
    top: 34px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
  }

  .burger-bar {
    
    width: 30px;
    height: 2px;
    background-color: #404040;
    border-radius: 0.5em;
    transform-origin: left center;
  }

  .burger-bar.clicked:nth-child(1) {
    rotate: 45deg;
    width: 23px;
    transition: ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(2) {
    transform: scale(0);
    transition: scale ease-out 0.5s;
  }

  .burger-bar.clicked:nth-child(3) {
    rotate: -45deg;
    width: 23px;
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
      top: 24px;
      position: relative;
      right: 32px;
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

  
  @media screen and (min-width: 1440px) {
    .menu {
      right: 128px;
    }
  }
`;
