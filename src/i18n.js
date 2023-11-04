import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./Translations/en.json"
import svTranslation from "./Translations/sv.json"


const resourses = {
    en: {
        translation: enTranslation
    },
    sv: {
        translation: svTranslation
    }
}

i18next.use(initReactI18next).init({
    resourses,
    lng: "en"
})

export default i18next