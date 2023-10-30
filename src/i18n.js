import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            welcome: "Welcome to Galactic Fitness!",
        },
    },
    sv: {
        translation: {
            welcome: "Välkommen till Galactic Fitness!",
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