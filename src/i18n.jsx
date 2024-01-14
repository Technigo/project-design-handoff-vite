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
            'NEW TO YOGA?': 'NYBÖRJARE PÅ YOGA?',
            'Start with a free trial session, and we will help you begin your journey with confidence.': 'VI hjälper dig att börja din resa med självförtroende. Starta med en gratis prova på session idag.',
            'Book Now': 'Boka nu',
            'ABOUT US': 'OM OSS',
            'Serenity Yoga embarked on its journey at Mariatorget, Södermalm in Stockholm in the summer of 2022. In the autumn of 2023, we expanded our presence with a second studio at Hornstulls Strand.': 'Serenity Yoga påbörjade sin resa vid Mariatorget, Södermalm i Stockholm sommaren 2022. På hösten 2023 utökade vi vår närvaro med en andra studio vid Hornstulls Strand.',
            'Discover Our Story': 'Läs mer om vår historia',
            'RECENT POSTS': 'SENASTE INLÄGGEN',
            '25 July 2023': '25 Juli 2023',
            'FALL SCHEDULE': 'HÖSTENS SCHEMA',
            'We are open throughout the fall from 25/8 to 20/12. Unlimited yoga during this period - 1490 SEK.': 'I höst har vi öppet från den 25/8 till 20/12. Obegränsat med yoga under denna period för endast 1490 kronor.',
            'Read more': 'Läs mer',
            '5 July 2023': '5 Juli 2023',
            'YOGA TEACHER TRAININGS': 'Lektioner för Yoga lärare',
            'Starting in the fall of 2023. Early-bird price, 29,900 SEK (including VAT). For more information, email or call, +46 736 26...': 'Startar hösten 2023. Tidig bokningspris, 29 900 SEK (inklusive moms). För mer information, maila eller ring, +46 736 26...',
            '5 June 2023': '5 Juni 2023',
            'ASHTANGA COURSE FALL 2023': 'ASHTANGA KURSER HÖST 2023',
            'Sign up for an Ashtanga course, Step 1, 2, or 3 this fall and receive a free 10-class pass! The pass...': 'Anmäl dig till en Ashtanga-kurs, Steg 1, 2, eller 3 i höst och få ett gratis 10-klasspass! Passet...',
            'Stay in touch with us': 'Håll kontakten med oss',
            'Register your email address for news and updates from Serenity Yoga.': 'Registrera din email för nyheter och uppdateringar från Serenity Yoga',
            'Subscribe': 'Prenumerera',
            'By signing up for our email list, you consent to the handling of your': 'Genom att ange din email adress så godkänner du att vi hanterar din',
            'personal information in accordance with our terms and conditions.': 'personliga information i enlighet med våra regler och villkor.',
            'OUR MISSION AND VALUES': 'VÅRT UPPDRAG OCH VÄRDERINGAR',
            'Our mission is to empower individuals to transform their lives through the practice of yoga. We believe in creating a nurturing and inclusive environment where all can discover their true potential, both on and off the mat. Our core values include authenticity, mindfulness, and a commitment to personal growth.': 'Vårt uppdrag är att ge människor möjligheten att förändra sina liv genom praktiken av yoga. Vi tror på att skapa en närande och inkluderande miljö där alla kan upptäcka sin sanna potential, både på och utanför mattan. Våra kärnvärden inkluderar äkthet, medvetenhet och engagemang för personlig utveckling.',






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