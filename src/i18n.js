import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./translations/en.json";
import seTranslations from "./translations/se.json"; //svensk
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
    lng: "en", // standard language
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
