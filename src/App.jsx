import React from "react";
import { AboutUs } from "./components/aboutUs.jsx";
import { NavBar } from "./components/navBar.jsx";
import { OurYoga } from "./components/ouryoga.jsx";
import { ThreeCards } from "./components/threeCards.jsx";

export const App = () => {
  return (
  <div>
    <NavBar />
    <OurYoga />
    <ThreeCards />
    <AboutUs />
  </div>
  )
};
