import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { OurClass } from "./components/OurClass";
import { Event } from "./components/Event";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <OurClass />
      <Event />
      <Footer />
    </main>
  );
};
