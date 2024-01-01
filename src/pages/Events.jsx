import React from "react";
import { HeaderEvents } from "../components/Sections/HeaderEvents/HeaderEvents";
import { Footer } from "../components/Sections/Footer/Footer";
import { BodyEvents } from "../components/Sections/BodyEvents/BodyEvents";
import { EventCards } from "../components/Sections/EventCards/EventCards";

export const Events = () => {
  return (
    <>
      <HeaderEvents />
      <BodyEvents />
      <EventCards />
      <Footer />
    </>
  );
};
