import { Hero } from "../components/MainContent/Hero.jsx";
import { Courses } from "../components/MainContent/Courses.jsx";

// Define the StartPage component, which represents the main content of the start page
export const StartPage = () => {
  return (
    <section>
      <Hero />
      <Courses />
    </section>
  );
};
