//Initialization of the i18n configuration in order to be able to translate.
//Import of necessary libraries
import i18n from "i18next"
import { initReactI18next } from "react-i18next"

//Importing language-specific translation files
import enTranslations from "./translations/en.json"
import svTranslations from "./translations/sv.json"

// Configuration of language-specific resources for i18n
const resources = {
    en: {
        translation: enTranslations,
    },
    sv: {
        translation: svTranslations,
    },
};


// Initializing i18n
i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {
        escapeValue: false
    }
})

export default i18n