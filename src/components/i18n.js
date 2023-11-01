import i18n from "i18next";

import { initReactI18next } from "react-i18next";

const resources = {
  en: {},
  se: {},
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
});

export default i18n;
