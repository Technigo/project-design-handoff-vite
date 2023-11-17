import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enTranslations from "./translations/en.json"
import svTranslations from "./translations/sv.json"


const resources = {
    en: {
        translation: enTranslations,
    },
    sv: {
        translation: svTranslations,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    interpolation: {  //swapping placeholders with real values in our text
        escapeValue: false,
    }
})

export default i18n