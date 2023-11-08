import React from "react";
import { AboutUsImage } from "./aboutUsImage.jsx";
import { MissionValues } from "./missionValues.jsx";
import { OurStory } from "./ourStory.jsx";
import { OurStudio } from "./ourStudio.jsx";
import { WeHere } from "./weHere.jsx";
import { ContactFootNote } from "./contactFootNote.jsx";
import { SomePage } from "./somePage.jsx";

export const AboutUsIndex = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    
  };

  const componentStyle = {
    margin: "0", // Set margin to 0 to remove margins
  };


  return (
    <div style={containerStyle}>
      <AboutUsImage style={componentStyle} />
      <MissionValues style={componentStyle} />
      <OurStory style={componentStyle} />
      <OurStudio style={componentStyle} />
      <WeHere style={componentStyle} />
      <ContactFootNote style={componentStyle} />
    </div>
  );
};