import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our website!",
      text: "Pizza is good",
    },
  },
  no: {
    translation: {
      welcome: "Velkommen til vår side!",
      text: "Pizza er godt!",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lang: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
