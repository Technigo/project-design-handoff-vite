import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import enTranslation from "./Translations/en.json"
// import svTranslations from "./Translations/sv.json"

const resources = {
    en: {
        translation: enTranslation,
    },
    // sv: {
    //     translation: svTranslations,
    // },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {
        escapeValue: false
    }
})

export default i18n