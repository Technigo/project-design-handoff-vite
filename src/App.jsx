import { Hero } from "./components/Hero";
import { Buttons } from "./components/Buttons";

import { createGlobalStyle } from "styled-components";

export const App = () => {
  return (
    <>
      <Fonts />
      <Hero />
      <Buttons />
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
