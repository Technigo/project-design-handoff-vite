import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import enArticle from "./translations/enArticleData.json"
import seArticle from "./translations/seArticleData.json"
import enInformation from "./translations/enInformation.json";
import seInformation from "./translations/seInformation.json";
import enHome from "./translations/enHome.json"
import seHome from "./translations/seHome.json"
import enContact from "./translations/enContact.json"
import seContact from "./translations/seContact.json"

 export const resources = {
  en: {
     translation: enArticle,
     information: enInformation,
     home: enHome,
     contact: enContact,
  },
  se: {
    translation: seArticle,
    information: seInformation,
    home: seHome,
    contact: seContact,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "se", // default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;