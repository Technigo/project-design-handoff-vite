import { Hero } from "./components/Hero";
import { Buttons } from "./components/Buttons";

import { createGlobalStyle } from "styled-components";
import { OurOfferings } from "./components/OurOfferings";

export const App = () => {
  return (
    <>
      <Fonts />
      <Hero />
      <OurOfferings />
    </>
  );
};

const Fonts = createGlobalStyle`
body {
  .mulish-<uniquifier> {
    font-family: "Mulish", sans-serif;
  }
  .philosopher-bold {
    font-family: "Philosopher", sans-serif;
    font-weight: 700;
    font-style: normal;
  }
}`;
