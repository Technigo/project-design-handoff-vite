import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      text: "Yoga is universally loved, and for good reason",
    },
  },
  sv: {
    translation: {
      welcome: "Välkommen till vår webbplats!",
      text: "Yoga är universiellt älskat, och av goda skäl",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "en",
});

//Kan jag göra export på annat sätt?
export default i18n;
