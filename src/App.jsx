import { Navigation } from "./components/Navigation";
import { TopSection } from "./components/TopSection";
import { About } from "./components/About";
import { Philosophy } from "./components/Philosophy";
import { Yogis } from "./components/Yogis";

export const App = () => {
  return (
    <>
      <Navigation />
      <TopSection />
      <About />
      <Philosophy />
      <Yogis />
    </>
  );
};
