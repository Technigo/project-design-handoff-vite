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
            "read more": "läs mer",
            article1_info: "Våra grundare Emmy och Carina var mammor, arbetare och partners. De kämpade för att hitta tid att balansera allt samtidigt som de tog hand om sig själva. De provade alla träningsappar och kunde inte hitta pass korta nog för deras fullspäckade schema.",
            article2_info: "Att röra på din kropp hjälper till att minska din sjuklighet. När du håller dig konsekvent, oavsett tid, är fördelarna för din hälsa enorma. Vi uppmuntrar dig att läsa några studier som vi har tillhandahållit. Klicka på läs mer för att se artiklarna.",
            article3_info: "Vi anser att alla ska ha möjlighet att nå sina träningsmål. Vi har olika prisklasser. Allt från 0 kr till 800 kr. Skillnaderna i hälsa blir allt större mellan fattiga och rika. Så vi vill erbjuda ett lyxigt utrymme för människor från olika ekonomiska bakgrunder. Du är välkommen här!",
            article1_name: "grundat av upptagna kvinnor",
            article2_name: "vem bryr sig om din hälsa",
            article3_name: "ha tillgång till träning oavsett budget"
        }
    },

    en: {
        translation: {
            // ... Other translations
            article1_info: "Our founders Emmy and Carina were mothers, workers, and partners. They were struggling to find time to balance everything while taking care of themselves. They tried every fitness app and were unable to find workouts short enough for their busy schedule.",
            article2_info: "Moving your body  helps decrease your morbidity. When you stay consistent not matter the time, the benefits for your health are enormous. We encourage you to read some studies that we have provided. Click read more to see the articles.",
            article3_info: "We believe that everyone should have the opportunity to pursue their fitness goals. We had different price ranges. Ranging from $0 to $75. The health disparity is becoming greater between the poor and rich. So we want to provide a luxurious space for people coming from different economic backgrounds. You are welcome here!",
            article1_name: "founded by busy women",
            article2_name: "who care about your health",
            article3_name: "access fitness no matter the budget"
        },
    },
};


i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
})

export default i18n;