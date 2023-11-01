import { useState, useEffect } from "react";
import { Header } from "../Sections/Header";
import { Workout } from "../Sections/Workout";
import { WorkoutPlans } from "../Sections/WorkoutPlans";
import { Membership } from "../Sections/Membership";
import { Reviews } from "../Sections/Reviews";
import { Trainers } from "../Sections/Trainers";
import { Footer } from "../Sections/Footer";
import { HeroSection } from "../Components/HeroSection";

export const Home = () => {
  {/* conditionally display hero section depending the screen size */}
  const [width, setWidth] = useState(window.innerWidth);
  const breakPointTablet = 834;

  useEffect(() => {
    // Set the width to the inner width of the window 
    const handleWindowResize = () => setWidth(window.innerWidth);
    // If the user resizes the screen, the event listener will be triggered, the function will be called to set the width to the new innerWidth of the window
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize)
  }, []) // the effect only runs once when the user resizes the screen width

  return (
    <div className="main-wrapper">
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
    </div>
  )
}
