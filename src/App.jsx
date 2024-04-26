import { Fonts } from "./components/Fonts";
import { Hero } from "./components/Hero";
import { OurOfferings } from "./components/OurOfferings";
import { OurLessons } from "./components/OurLessons";
import { Contact } from "./components/Conatct";
import { TestimonialCards } from "./components/TestimonialCards";


//import { Buttons } from "./components/Buttons";
//import { CardsCarousel } from "./components/CardsCarousel";

export const App = () => {
  return (
    <>
      <Fonts />
      <Hero />
      <OurOfferings />
      <OurLessons />
      <Contact />
      <TestimonialCards />
    </>
  );
};
