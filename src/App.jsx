import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { BodyParagraph } from "./components/BodyParagraph";
import CardInfo from "./components/CardInfo";

import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <BodyParagraph />
      <CardInfo /> 
      <Footer />
    </div>
  );    
};
