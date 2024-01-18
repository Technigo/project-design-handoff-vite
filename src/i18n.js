import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import english from "./languages/en.json"
import finnish from "./languages/fi.json"

const resources = {
    en: {
        translation: english,
    },

    fi: {
        translation: finnish,
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
})

export default i18n