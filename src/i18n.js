import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            heading: "Master the Pilates fundamentals",
            subheading: "Sculpt, sweat and flow it out on the mat with the help of 100+ online classes. Available whenever you want.",
            joinTheMovement: "JOIN THE MOVEMENT",
            coreFlex: "CORE FLEX",
            preNatal: "PRE NATAL",
            postNatal: "POST NATAL",
            foundation: "FOUNDATION",
            breathWork: "BREATH WORK",
            intensity: "LOW, MEDIUM AND HIGH INTENSITY",
            classes: "CLASSES",
            coreStrength: "CORE STRENGTH",
            increasedEnergy: "INCREASED ENERGY",
            flexibilityAndMobility: "IMPROVED FLEXIBILITY AND MOBILITY",
            balance: "IMPROVED BALANCE",
            posture: "STRONG POSTURE",
            tailoredLevels: "Different levels tailored to your needs",
            lowImpact: "Low impact sessions ranging from 15-45 minutes",
            certifiedInstructors: "Certified instructors teaching you the fundamentals of Pilates",
            testimonials: "Testimonials",
            quote: "I love the movements and seeing my body transform before my eyes! I didn’t realise how much my posture could improve until I tried the “Posture class.“",
            english: "ENGLISH",
            swedish: "SWEDISH",
            about: "ABOUT US",
            logIn: "LOG IN",
            signUp: "SIGN UP",
            benefits: "BENEFITS",
            joinOurCommunity: "JOIN OUR COMMUNITY",
            unlock: "Unlock",
            hundredClasses: " 100+ classes ",
            andStart: "and start ",
            movingOnTheMove: "moving on the move",
        },
    },
    sv: {
        translation: {
            heading: "Bemästra grunderna i Pilates",
            subheading: "Skulptera, svettas och flowa på mattan med hjälp av över 100 onlineklasser. Tillgängligt när du vill.",
            joinTheMovement: "VAR MED I RÖRELSEN",
            coreFlex: "CORE OCH FLEXIBILITET",
            preNatal: "GRAVID",
            postNatal: "EFTER GRAVIDITET",
            foundation: "GRUND",
            breathWork: "ANDNINGSTEKNIK",
            intensity: "LÅG, MEDEL OCH HÖG INTENSITET",
            classes: "KLASSER",
            coreStrength: "KÄRNSTYRKA",
            increasedEnergy: "ÖKAD ENERGI",
            flexibilityAndMobility: "FÖRBÄTTRAD FLEXIBILITET OCH RÖRLIGHET",
            balance: "FÖRBÄTTRAD BALANS",
            posture: "STARK KROPPSHÅLLNING",
            tailoredLevels: "Olika nivåer anpassade efter dina behov",
            lowImpact: "Skonsamma pass som varar 15-45 minuter",
            certifiedInstructors: "Certifierade instruktörer som lär dig grunderna i Pilates",
            testimonials: "Vittnesmål",
            quote: "Jag älskar rörelserna och att se min kropp förändras framför mina ögon! Jag insåg inte hur mycket min kroppshållning kunde förbättras förrän jag provade 'Kroppshållningsklassen'.",
            english: "ENGELSKA",
            swedish: "SVENSKA",
            about: "OM OSS",
            logIn: "LOGGA IN",
            signUp: "REGISTRERA DIG",
            benefits: "FÖRDELAR",
            joinOurCommunity: "GÅ MED I VÅR GEMENSKAP",
            unlock: "Lås upp",
            hundredClasses: " 100+ klasser ",
            andStart: "och börja ",
            movingOnTheMove: "röra dig på språng"
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en", // default language
});

export default i18n;
