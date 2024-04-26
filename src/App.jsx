import { Fonts } from "./components/Fonts";
import { Hero } from "./components/Hero";
import { OurOfferings } from "./components/OurOfferings";
import { OurLessons } from "./components/OurLessons";
import { Contact } from "./components/Contact";
import { TestimonialCards } from "./components/TestimonialCards";
import { MakeYourPick } from "./components/MakeYourPick";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <Fonts />
      <Hero />
      <OurOfferings />
      <OurLessons />
      <TestimonialCards />
      <MakeYourPick />
      <Contact />
      <Footer />
    </>
  );
};
