import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
        welcome: "Welcome to the page!",
        text: "This is a website about a gym",
        },
    },
    sv: {
        translation: {
            welcome: "Välkommen till hemsidan!",
            text: "Den här sidan är om ett gym",
            },
    },
}

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false
    }
})

export default i18n