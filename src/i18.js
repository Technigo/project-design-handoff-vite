import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//Separate JSON translation files
import enTranslations from "./locales/en/translation.json";
import seTranslations from "./locales/se/translation.json";
import noTranslations from "./locales/no/translation.json";
import daTranslations from "./locales/da/translation.json";
import ptTranslations from "./locales/pt/translation.json";
import mkTranslations from "./locales/mk/translation.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  se: {
    translation: seTranslations,
  },
  no: {
    translation: noTranslations,
  },
  da: {
    translation: daTranslations,
  },
  pt: {
    translation: ptTranslations,
  },
  mk: {
    translation: mkTranslations,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lang: "en", // default language (key)
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
