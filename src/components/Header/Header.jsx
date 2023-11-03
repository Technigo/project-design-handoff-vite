import { LogoDark } from "../ReusableComponents/Logo/LogoDark.jsx";
import styled from "styled-components";
import { BurgerMenu } from "./BurgerMenu.jsx";

const StyledHeader = styled.div`
  background: #fff6e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const BurgerWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const BurgerMenuStyles = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 42px;
    height: 42px;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-burger-bars-hover {
    background: #a90000;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  .bm-item {
    display: inline-block;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <BurgerWrapper>
        <BurgerMenu styles={BurgerMenuStyles} />
      </BurgerWrapper>
      <LogoDark />
    </StyledHeader>
  );
};

{
  /* <header>
      <nav class="navbar">
        <div class="logo">
          <a href="https://news-site-anna-robertsson.netlify.app/" title="Back to homepage">
          <img src="./images/the-visionary-logo-with-tv.png" alt="The VISIONary logo">
          </a>
        </div>
        <div class="site-name">
          <h1><span style="color: #1d4355">The </span><span style="text-transform:uppercase">vision</span>ary</h1>
        </div>
        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          <div class="menu">
            <li>
              <a href="home"> Home</a>
            </li>
            <li class="news">
              <a href="news"> News</a>
              <ul class="dropdown">
                <li><a href="latest news">Latest news</a></li>
                <li><a href="archive">Search in our archive</a></li>
              </ul>
            </li>
            <li class="about">
              <a href="about"> About</a>
              <ul class="dropdown">
                <li><a href="start">How it all started</a></li>
                <li><a href="vision">Our vision</a></li>
                <li><a href="staff">Meet the staff</a></li>
              </ul>
            </li>
            <li>
              <a href="contact"> Contact</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>*/
}
