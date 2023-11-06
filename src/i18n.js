// i18n.js eller tilsvarende fil
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translations/en.json";
import seTranslations from "./translations/se.json"; // Anta at dette er den svenske oversettelsen

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
    lng: "en", // standard språk
    fallbackLng: 'en', // Bruk 'en' som reserve språk
    interpolation: {
        escapeValue: false, // Unngå escaping av verdier
    },
});

export default i18n;
