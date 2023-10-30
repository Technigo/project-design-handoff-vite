import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            welcome: "Welcome to Gymnior!",
        },
    },
    sv: {
        translation: {
            welcome: "Välkommen till Gymnior!",
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