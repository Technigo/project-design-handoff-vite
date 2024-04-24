import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { OurClass } from "./components/OurClass";
import { Event } from "./components/Event";
import { Footer } from "./components/Footer";
import { createGlobalStyle } from "styled-components";
import AvenirBlack from "./assets/Avenir-Black.ttf";
import AvenirMedium from "./assets/Avenir-Medium.ttf";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'AvenirBlack';
  src: url(${AvenirBlack}) format('truetype');
}
@font-face {
  font-family: 'AvenirMedium';
  src: url(${AvenirMedium}) format('truetype');
}
  
  :root {
    --main-text-color: #000000;
    --secondary-color: #e4dbd2;
    --button-static-color: #b3583b;
    --button-hover-color: #552a1c;
    --button-text-color: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body, #root {
    min-height: 100vh;
    height: 100%;
    
  }

  body {
    background-repeat: no-repeat;
    background: linear-gradient(
      180deg,
      #a6c2c5 9.5%,
      #d2dbe0 28.5%,
      #d2dbe0 51%,
      #9ab8c8 66.5%,
      #a6c2c5 86%,
      #9cc2d2 100%
    ) ;
   
  }

  main{
    height: 100%;
     position:relative;
  }


`;

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <div className="lauch-page">
          <NavBar />
          <Hero />
        </div>
        <OurClass />
        <Event />
        <Footer />
      </main>
    </>
  );
};
