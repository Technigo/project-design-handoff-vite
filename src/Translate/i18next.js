import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Eng from "./Eng.json";
import Swe from "./Swe.json";

let resources = {};

const loadResources = async () => {
    const engTranslations = await import('./Eng.json');
    const sweTranslations = await import('./Swe.json');

    resources = {
        Eng: {
            translation: engTranslations.default
        },
        Swe: {
            translation: sweTranslations.default
        }
    };

    i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: "Eng",
            interpolation: {
                escapeValue: false
            }
        });
}

loadResources();

export default i18n;
