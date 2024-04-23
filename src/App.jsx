import { Hero } from "./components/Hero";
import { Buttons } from "./components/Buttons";

import { createGlobalStyle } from "styled-components";

const Fonts = createGlobalStyle`
body {
  .mulish-<uniquifier> {
    font-family: "Mulish", sans-serif;
  }
}`;

export const App = () => {
  return (
    <>
      <Fonts />
      <Hero />
      <Buttons />
    </>
  );
};
