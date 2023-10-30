import React from "react";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Workout from "./components/Workout";

export const App = () => {
  return <div>
    <Navbar />
    <HeroHeader />
    <Workout />
  </div>;
};
