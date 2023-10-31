import React from "react";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Workout from "./components/Workout";
import Form from "./components/Form";
import Plans from "./components/Plans";

export const App = () => {
  return <div className="main">
    <Navbar />
    <HeroHeader />
    <Workout />
    <Form />
    <Plans />
  </div>;
};
