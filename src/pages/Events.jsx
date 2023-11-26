import React from "react";
import { HeaderEvents } from "../components/Sections/HeaderEvents/HeaderEvents";
import { Footer } from "../components/Sections/Footer/Footer";
import { BodyEvents } from "../components/Sections/BodyEvents/BodyEvents";
import { useTranslation } from "react-i18next";
import { EventCards } from "../components/Sections/EventCards/EventCards";

//waiting for UX designer to complete design for this (thurs 02/11/23)
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
