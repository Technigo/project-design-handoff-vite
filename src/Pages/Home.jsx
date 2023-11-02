import styled from "styled-components";

import { useState, useEffect } from "react";
import { Header } from "../Sections/Header";
import { Workout } from "../Sections/Workout";
import { WorkoutPlans } from "../Sections/WorkoutPlans";
import { Membership } from "../Sections/Membership";
import { Reviews } from "../Sections/Reviews";
import { Trainers } from "../Sections/Trainers";
import { Footer } from "../Sections/Footer";
import { HeroSection } from "../Components/HeroSection";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 16px;

  @media (min-width: 394px) {
    gap: 49px;
    padding: 32px;
  }

  @media (min-width: 835px) {
    gap: 64px;
    padding: 64px;
  }
`

export const Home = () => {
  {/* conditionally display hero section depending the screen size */}
  const [width, setWidth] = useState(window.innerWidth);
  const breakPointTablet = 394;

  useEffect(() => {
    // Set the width to the inner width of the window 
    const handleWindowResize = () => setWidth(window.innerWidth);
    // If the user resizes the screen, the event listener will be triggered, the function will be called to set the width to the new innerWidth of the window
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []) // the effect only runs once when the user resizes the screen width

  return (
    <MainWrapper>
        <Header />
        {/* compare the width to the breakpoint to conditionally render the HeroSection */}
        {width < breakPointTablet ? null : (
          <HeroSection />
        )}      
        <Workout />
        <WorkoutPlans />
        <Membership />
        <Reviews />
        <Trainers />
        <Footer />
    </MainWrapper>
  )
}
