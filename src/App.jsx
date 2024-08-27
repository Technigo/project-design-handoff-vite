import { Navigation } from "./components/Navigation";
import { TopSection } from "./components/TopSection";
import { About } from "./components/About";
import { Philosophy } from "./components/Philosophy";
import { Yogis } from "./components/Yogis";
import { Happenings } from "./components/Happenings";
import { YogaPackages } from "./components/YogaPackages";
import { Quote } from "./components/Quote";
import { FAQ } from "./components/FAQ";

export const App = () => {
  return (
    <>
      <Navigation />
      <TopSection />
      <About />
      <Philosophy />
      <Yogis />
      <Happenings />
      <YogaPackages />
      <Quote />
      <FAQ />
    </>
  );
};
