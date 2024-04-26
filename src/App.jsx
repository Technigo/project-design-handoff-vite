import { HeroSection } from "./components/HeroSection"
import { Statistics } from "./components/Statistics"
import { AboutUs } from "./components/AboutUs"
// import { ClassCards } from "./components/classCards/ClassCards"
import { ClassCard } from "./components/ClassCard"

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
      <ClassCard />
      <InstructorCards />
      <ValueCards />
      <Membership />
      <BecomeMember />
      <Footer />
    </>
  )
}
