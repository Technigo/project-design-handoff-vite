import i18n from "i18next";
import { initReactI18next } from "react-i18next";

 import enTranslations from "./components/translations/en.json"
 import seTranslations from "./components/translations/se.json"

 const resources = {
    en: {
     translation: enTranslations,
    }, 
    se: {
     translation: seTranslations,
    }
 }

i18n.use(initReactI18next).init({
    resources, 
    lng: "en", 
    interpolation: {
        escapeValue: false
    }
})

export default i18n