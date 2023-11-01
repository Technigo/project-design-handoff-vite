import React from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import HeroHeader from "./components/HeroHeader";
import HeroheaderTablet from "./components/HeroheaderTablet";
import Workout from "./components/Workout";
import Form from "./components/Form";
import FormMobile from "./components/FormMobile";
import Plans from "./components/Plans";
import Reviews from "./components/Reviews";
import Trainers from "./components/Trainers";
import Footer from "./components/Footer";

export const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 393 });
  const isTablet = useMediaQuery({ maxWidth: 834 });

  return (
    <div className="main">
      {isMobile ? (
        <NavbarMobile />
      ) : isTablet ? (
        <NavbarMobile />
      ) : (
        <Navbar />
      )}
      {isTablet ? (
        <HeroheaderTablet />
      ) : (
        !isMobile && <HeroHeader />
      )}
      <Workout />
      <div className="mobile-main">
        {isMobile ? <FormMobile /> : <Form />}
        <Plans />
      </div>
      <Reviews />
      <Trainers />
      <Footer />
    </div>
  );
};
