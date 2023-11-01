import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    sv: {
        translation: {
            workout: "Träning",
            glutes: "Rumpa",
            arms: "Armar",
            back: "Rygg",

        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
})

export default i18n;