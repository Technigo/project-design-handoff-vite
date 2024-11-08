import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { BodyParagraph } from "./components/BodyParagraph";
import { Animation } from "./components/Animation";

import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <BodyParagraph />
      <Animation />
      <Footer />
    </div>
  );    
};
