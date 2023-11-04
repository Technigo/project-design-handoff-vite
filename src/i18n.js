import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./Translations/en.json";
import seTranslations from "./Translations/se.json";

const resources = {
    en: {
        translation: enTranslations,
    },
    se: {
        translation: seTranslations,
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;