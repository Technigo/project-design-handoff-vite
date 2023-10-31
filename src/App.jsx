import React from "react";
import Navbar from "./components/Navbar";
import HeroHeader from "./components/HeroHeader";
import Workout from "./components/Workout";
import Form from "./components/Form";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import Trainers from "./components/Trainers";
import Footer from "./components/Footer";

export const App = () => {
  return <div className="main">
    <Navbar />
    <HeroHeader />
    <Workout />
    <Form />
    <Plans />
    <Reviews />
    <Trainers />
    <Footer />
  </div>;
};
