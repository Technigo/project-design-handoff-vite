import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
      translation: {
        welcome: "Welcome to our website!",
      },
    },
    es: {
      translation: {
        welcome: "¡Bienvenido a nuestro sitio web!",
      },
    },
    sv: {
      translation: {
        welcome: "Välkommen till vår webbplats!",
      },
    },
  };

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {
    escapeValue: false
    }
})

export default i18n