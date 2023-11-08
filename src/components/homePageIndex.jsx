import React from "react";
import { HomePage } from "./homePage.jsx";
import { OurYoga } from "./ouryoga.jsx";
import { ThreeCards } from "./threeCards.jsx";
import { RecentPost } from "./recentPost.jsx";
import { StayInTouch } from "./stayinTouch.jsx";
import { ContactFootNote } from "./contactFootNote.jsx";

export const HomePageIndex = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    
  };

  const componentStyle = {
    margin: "0", // Set margin to 0 to remove margins
  };

  return (
    <div style={containerStyle}>
      <HomePage style={componentStyle} />
      <OurYoga style={componentStyle} />
      <ThreeCards style={componentStyle} />
      <RecentPost style={componentStyle} />
      <StayInTouch style={componentStyle} />
      <ContactFootNote style={componentStyle} />
    </div>
  );
};