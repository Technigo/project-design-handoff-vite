import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    sv:
    {
        "translation": {
            "Workout": "Träning",
            "Cardio": "Kondition",
            "Glutes": "Rumpa",
            "Arms": "Armar",
            "Back": "Rygg",
            "Tracker": "Min träning",
            "Favorites": "favoriter",
            "Workout Plan": "Träningsplan",
            "Workout Plans": "Träningsplaner",
            "Search": "Sök",
            "At Home Fitness": "Hemmaträning",
            "Helping you move in your comfort zone": "Hjälper dig att komma ur din komfortzon",
            "Contact Us": "Kontakta Oss",
            "About Us": "Om Oss",
            "Language": "Språk",
            "Have more questions or feedback? Message us!": "Har du fler frågor eller återkoppling? Skriv till oss!",
            "Send": "Skicka",
            "Sign up for a membership to unlock your full potential": "Registrera dig för ett medlemskap för att frigöra din fulla potential",
            "get workout plans tailored to you": "få träningsplaner skräddarsydda för dig",
            "unlimited access to library": "obegränsad tillgång till biblioteket",
            "access to live trainers": "tillgång till livetränare",
            "SIGN UP FOR MEMBERSHIP": "REGISTRERA DIG FÖR MEDLEMSKAP",
            "Privacy & Cookie Settings": "Sekretess- och Cookieinställningar",
            "Social Media": "Sociala Medier",
            "Trainers": "Personliga Tränare",
            "Reviews": "Recensioner",
            "I love seeing the tracker and my progress!": "Jag älskar att se min träning och mina framsteg!",
            "I am a sucker for free things so getting a free video every 5 days in a row I complete has been awesome! It motivates me to move my body.": "Jag älskar gratis saker så att få en gratis video var femte dag i rad har varit fantastiskt! Det motiverar mig att röra på min kropp.",
            "days a week": "dagar i veckan",
            "read more": "läs mer"
        }
    },
};


i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
})

export default i18n;