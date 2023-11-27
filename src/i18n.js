import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//Import your separate JSON translation files
import enTranslations from "./translations/en.json";
import deTranslations from "./translations/de.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  de: {
    translation: deTranslations,
  },

  //BOILERPLATE CODE FROM EXAMPLE COMMENTED OUT AS I FOLLOWED DIEGOS INSTRUCTIONS IN THE LESSON
  //   en: {
  //     translation: {
  //       welcome: "Welcome to our website!",
  //     },
  //   },
  //   es: {
  //     translation: {
  //       welcome: "¡Bienvenido a nuestro sitio web!",
  //     },
  //   },
  //   sv: {
  //     translation: {
  //       welcome: "Välkommen till vår webbplats!",
  //     },
  //   },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
