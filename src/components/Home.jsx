import { CTA } from "./CTA";
import { Carousel } from ".//Carousel";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Quote } from ".//Quote";
import { Rating } from "./Rating";
import { useState } from "react";
import { handleResize } from "../utils/handleResize";

export const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  return (
    <>
      <Header />
      <Hero
        handleResize={handleResize}
        setWindowWidth={setWindowWidth}
        windowWidth={windowWidth}
      />
      <main>
        <Quote />
        <Rating />
        <Carousel
          handleResize={handleResize}
          setWindowWidth={setWindowWidth}
          windowWidth={windowWidth}
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
};
