import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./Translation/en.json";
import seTranslations from "./Translation/sv.json";

const resources = {
  en: {
    translations: enTranslations, // Corrected from tranlations to translations
  },

  sv: {
    translations: seTranslations, // Corrected from tranlations to translations
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
