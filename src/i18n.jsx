import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    sv: {
        translation: {
            'CONTACT': 'Kontakt',
            'TERMS': 'Villkor',
            'FAQ': 'Vanliga frågor',  
            'ABOUT US': 'OM OSS',
            'EXPLORE': 'UTFORSKA',
            'SCHEDULE': 'SCHEMA',
            'PRICES': 'PRISER',
            'Your journey to inner balance begins here.': 'Din resa till inre balans börjar här',
            'With us, yoga is for everyone, whether you are a beginner or an experienced yogini. Welcome to a place where you belong!': 'Enligt oss är yoga något för alla, oavsett om du är en nybörjare eller erfaren yogini. Välkommen till en plats där du kan känna dig som hemma!',      
            'DISCOVER OUR STUDIO': 'UTFORSKA VÅR STUDIO',
            'LOG IN': 'LOGGA IN',





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