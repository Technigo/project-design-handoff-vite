import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { BodyParagraph } from "./components/BodyParagraph";

export const App = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <BodyParagraph />
    </div>
  );    
};
