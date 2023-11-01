import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            welcome: "Test: Translation",
            text: "English"
        },
    },
    sv: {
        translation: {
            welcome: "Test: Översättning",
            text: "Svenska"
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