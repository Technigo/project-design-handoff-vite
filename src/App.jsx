import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import HeroHeader from "./components/HeroHeader";
import Workout from "./components/Workout";
import Form from "./components/Form";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import Trainers from "./components/Trainers";
import Footer from "./components/Footer";

export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 393 });

  return (
    <div className="main">
      {isMobile ? <NavbarMobile /> : <Navbar />}
      {!isMobile && <HeroHeader />}
      <Workout />
      <Form />
      <Plans />
      <Reviews />
      <Trainers />
      <Footer />
    </div>
  );
};
