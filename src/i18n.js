import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translations/en.json";
import seTranslations from "./translations/se.json";

// import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: enTranslations,
  },

  se: {
    translation: seTranslations,
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
