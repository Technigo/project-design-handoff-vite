import { AboutMe } from "./AboutMe";
import { Courses } from "./Courses";
import { Hero } from "./Hero";
import { Motto } from "./Motto";
import { Newsletter } from "./Newsletter";

export const LandingPage = () => {
  return (
    <div className="landing">
      <Hero />
      <h1>Courses at MINI FLOW</h1>
      <Courses />
      <Motto />
      <AboutMe />
      <Newsletter />
    </div>
  );
};
