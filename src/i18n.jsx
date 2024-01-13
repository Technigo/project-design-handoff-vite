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
            'Welcome to our community of experienced teachers, where you will find classes for all': 'Välkommen till vårt community av erfarna lärare, här finner du klasser för alla',
            'levels. Join us for our heartwarming events, including workshops, teacher training,': 'nivåer. Var med på våra hjärtvärmande event, workshops, lärarutbildning,', 
            'and retreats.': 'och retreats.',
            'View Our Offerings': 'Se våra erbjudanden',
            'OUR YOGA': 'VÅR YOGA',
            'No matter which class you choose, we stress breath, muscle support, and focus to ensure a safe yoga practice. We tailor our classes to your individual needs, whether you require modifications due to injuries or want to challenge yourself. We love sharing our passion for yoga and are always available to answer your questions after the class. We are here for you!': 'Oavsett vilken klass du väljer, lägger vi vikt vid andning, muskelstöd och fokus för att säkerställa en säker yogapraxis. Vi anpassar våra klasser till dina individuella behov, oavsett om du behöver modifieringar på grund av skador eller vill utmana dig själv. Vi älskar att dela vår passion för yoga och är alltid tillgängliga för att svara på dina frågor efter klassen. Vi finns här för dig!',
            'Discover Our Classes': 'Se våra klasser',
            'CLASSES': 'KLASSER',
            'STUDIO': 'STUDIO',
            'SCHEDULE': 'SCHEMA',


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