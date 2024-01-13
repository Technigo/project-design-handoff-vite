import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    sv: {
        translation: {
            'CONTACT': 'Kontakt',
            'TERMS': 'Villkor',
            'FAQ': 'Vanliga frågor',          

        }
    },

    en: {
        translation: {
            'CONTACT': 'Contact',
            'TERMS': 'Terms',
            'FAQ': 'FAQ',
        },
    },
};


i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'en', 
    keySeparator: false, 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;