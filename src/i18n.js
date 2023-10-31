import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../src/components/Translation/en.json"
import seTranslation from "../src/components/Translation/se.json"

const resources = {
  en: {
    translation: enTranslation,
  },
  se: {
    translation: seTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "en",
});

//Kan jag göra export på annat sätt?
export default i18n;
