import { HeroSection } from "./components/HeroSection"
import { Statistics } from "./components/Statistics"
import { AboutUs } from "./components/AboutUs"
// import { ClassCards } from "./components/classCards/ClassCards"
import {ClassCards} from "./components/classCards/ClassCards"

import { ValueCards } from "./components/valueCards/ValueCards"
import { Membership } from "./components/Membership"
import { BecomeMember } from "./components/BecomeMember"
import { Footer } from "./components/Footer"
// import { InstructorCard } from "./components/InstructorCard"
import { InstructorCards } from "./components/instructorCards/InstructorCards"

export const App = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <AboutUs />
      <ClassCards />
      <InstructorCards />
      <ValueCards />
      <Membership />
      <BecomeMember />
      <Footer />
    </>
  )
}
