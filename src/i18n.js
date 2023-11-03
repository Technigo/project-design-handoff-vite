import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translations/en.json";
import svTranslations from "./translations/sv.json";

// import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: enTranslations,
  },

  sv: {
    translation: svTranslations,
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
