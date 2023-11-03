import styled from "styled-components";
import { Header } from "../Sections/Header";
import { Workout } from "../Sections/Workout";
import { WorkoutPlans } from "../Sections/WorkoutPlans";
import { Membership } from "../Sections/Membership";
import { Reviews } from "../Sections/Reviews";
import { Trainers } from "../Sections/Trainers";
import { Footer } from "../Sections/Footer";
import { HeroSection } from "../Sections/HeroSection";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 0 16px;

  @media (min-width: 394px) {
    gap: 49px;
    padding: 0 32px;
  }

  @media (min-width: 835px) {
    gap: 64px;
    padding: 0 64px;
  }
`

export const Home = () => {
  {/* conditionally display hero section depending the screen size */}
  const isTablet = window.innerWidth > 394;

  return (
    <MainWrapper>
      <Header />
      {isTablet ? (
        <HeroSection />
      ) : null}      
      <Workout />
      <WorkoutPlans />
      <Membership />
      <Reviews />
      <Trainers />
      <Footer />
    </MainWrapper>
  )
}
