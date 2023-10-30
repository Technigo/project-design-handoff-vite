import { AboutMe } from "./Landing-session/AboutMe";
import { Courses } from "./Landing-session/Courses";
import { Intro } from "./Landing-session/Intro";
import { Motto } from "./Landing-session/Motto";

export const LandingPage = () => {
  return (
    <div className="landing">
      <Intro />
      <h1>Courses at MINI FLOW</h1>
      <Courses />
      <Motto />

      <AboutMe />
    </div>
  );
};
