import { LogoDark } from "../ReusableComponents/Logo/LogoDark.jsx";
import { BurgerMenu } from "./BurgerMenu.jsx";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: #fff6e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /*position: fixed;*/ /* Add this line */
  /*top: 0;*/ /* Stick it to the top of the viewport */
  /*z-index: 1000;*/ /* Ensure it appears above other content */
`;

// const BurgerWrapper = styled.div`
//   display: flex;
//   align-items: flex-end;
//   justify-content: flex-end;
// `;

export const Header = () => {
  return (
    <StyledHeader>
      {/*<BurgerWrapper>*/}
      <BurgerMenu />
      {/*</BurgerWrapper>*/}
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
