import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { BodyParagraph } from "./components/BodyParagraph";
import Heading3 from "./components/Heading3";
import { CardInfo } from "./components/CardInfo";
import Animation from "./components/Animation";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <BodyParagraph />
      <Heading3>Hjälp till och gör skillnad!</Heading3>
      <CardInfo /> 
      <Animation />
      <Footer />
    </div>
  );    
};
