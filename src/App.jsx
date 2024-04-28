import { HeroSection } from "./components/HeroSection"
import { Statistics } from "./components/Statistics"
import { AboutUs } from "./components/AboutUs"
import { ClassCards } from "./components/classCards/ClassCards"
import { InstructorCards } from "./components/instructorCards/InstructorCards"
import { ValueCards } from "./components/valueCards/ValueCards"
import { Membership } from "./components/Membership"
import { BecomeMember } from "./components/BecomeMember"
import { Footer } from "./components/Footer"

export const App = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <AboutUs />
      <ClassCards />
      <InstructorCards />
      {/* <ValueCards /> */}
      <Membership />
      <BecomeMember />
      <Footer />
    </>
  );
};
