import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranlations from "./Translation/en.json";
import seTranlations from "./Translation/se.json";

const resources = {
  en: {
    tranlations: enTranlations,
  },

  sv: {
    tranlations: seTranlations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
