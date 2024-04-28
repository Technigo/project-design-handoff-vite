import { HeroSection } from "./sections/HeroSection"
import { Statistics } from "./sections/Statistics"
import { AboutUs } from "./sections/AboutUs"
import { ClassCards } from "./components/classCards/ClassCards"
import { InstructorCards } from "./components/instructorCards/InstructorCards"
import { ValueCards } from "./components/valueCards/ValueCards"
import { Membership } from "./sections/Membership"
import { BecomeMember } from "./sections/BecomeMember"
import { Footer } from "./sections/Footer"
import {Test} from "./components/Test"

export const App = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <AboutUs />
      <ClassCards />
      <Test />
      <InstructorCards />
      <ValueCards />
      <Membership />
      <BecomeMember />
      <Footer />
    </>
  );
};
