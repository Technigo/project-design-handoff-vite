import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "WhyPlayParkour": {
                "heading": "Why play parkour?"
            },
            "PlayParkour": {
                "heading": "Play Parkour",
                "description": "Treat your life as an adventure - all your life",
                "button": "Play Parkour"
            },
            "HowToPlayParkour": {
                "heading": "How to Play Parkour",
                "image1Desc": "Play with friends",
                "image2Desc": "Play with your children",
                "image3Desc": "Play with class coach"
            },
            "Header": {},
            "Footer": {
                "link1": "About us",
                "link2": "Play Parkour",
                "link3": "FAQ",
                "link4": "Contact information"
            },
            "CarouselComponent": {
                "quote1": "I get to play with grandma - Nestor 7 years",
                "quote2": "I feel like a child again - Martha 68 years",
                "quote3": "It is social and it improves the balance and you get better at falling without hurting yourself - Sven 72 years",
                "quote4": "Getting the kids from school and daycare are now an adventure and exercise for all of us, not a stressful moment. - David 35 years (Allans dad)",
                "quote5": "I get to know my neighbours and my neighbourhood - Alice 75 years",
                "quote6": "Because its fun and makes me stronger - Bella 35 years",
                "quote7": "I get to discover my neighbourhood in a new way - Ella 45 years"
            },
            "AboutUsPage": {
                "visionHeader": "Our Vision & Goal",
                "visionDesc1": "Our vision is to create a world where everyone has the opportunity to experience the joy of parkour. We believe that parkour is more than just a sport; it's a way of life.",
                "visionDesc2": "Our goal is to inspire people to push their limits, overcome obstacles, and achieve their full potential through the practice of parkour.",
                "storyHeader": "Our Story",
                "storyDesc": "Our story It started with grandma and 9-year-old Nestor being bored on their way home from school, then came Aunt Parkour, and today Play Parkour offers parkour programs and classes for all ages. The instructors are experienced and help students develop their strength, agility, balance, and coordination. We also have an online platform where students can learn parkour at their own pace and in the comfort of their own home.",
                "contactHeader": "Contact Us",
                "contactDesc": "We would love to hear from you!",
                "inputName": "Name",
                "inputEmail": "Email",
                "inputMessage": "Message",
                "checkboxLabel": "I agree to the Privacy terms",
                "submitButton": "Submit"
            },
            "AboutUs": {
                "heading": "About us",
                "description": "It started with grandma and Nestor, 9 years old, being bored on their way home from school. Then came AuntieParkour, and today Play Parkour offers parkour Programs and classes for all ages.",
                "button": "About Play Parkour"
            }
        }
    },
    sv: {
        translation: {
            "WhyPlayParkour": {
                "heading": "Varför spela parkour?"
            },
            "PlayParkour": {
                "heading": "Spela Parkour",
                "description": "Behandla ditt liv som ett äventyr - hela ditt liv",
                "button": "Spela Parkour"
            },
            "HowToPlayParkour": {
                "heading": "Hur man spelar Parkour",
                "image1Desc": "Spela med vänner",
                "image2Desc": "Spela med dina barn",
                "image3Desc": "Spela med träningscoach"
            },
            "Header": {},
            "Footer": {
                "link1": "Om oss",
                "link2": "Spela Parkour",
                "link3": "Vanliga frågor",
                "link4": "Kontaktinformation"
            },
            "CarouselComponent": {
                "quote1": "Jag får leka med mormor - Nestor 7 år",
                "quote2": "Jag känner mig som ett barn igen - Martha 68 år",
                "quote3": "Det är socialt och det förbättrar balansen och du blir bättre på att falla utan att skada dig - Sven 72 år",
                "quote4": "Att hämta barnen från skolan och dagis är nu ett äventyr och träning för oss alla, inte ett stressigt ögonblick. - David 35 år (Allans pappa)",
                "quote5": "Jag lär känna mina grannar och mitt grannskap - Alice 75 år",
                "quote6": "För att det är roligt och gör mig starkare - Bella 35 år",
                "quote7": "Jag får upptäcka mitt grannskap på ett nytt sätt - Ella 45 år"
            },
            "AboutUsPage": {
                "visionHeader": "Vår Vision & Mål",
                "visionDesc1": "Vår vision är att skapa en värld där alla har möjlighet att uppleva glädjen med parkour. Vi tror att parkour är mer än bara en sport; det är ett sätt att leva.",
                "visionDesc2": "Vårt mål är att inspirera människor att pusha sina gränser, övervinna hinder och uppnå sin fulla potential genom att praktisera parkour.",
                "storyHeader": "Vår historia",
                "storyDesc": "Vår historia började med mormor och 9-åriga Nestor som var uttråkade på vägen hem från skolan, sedan kom Faster Parkour, och idag erbjuder Play Parkour parkourprogram och kurser för alla åldrar. Instruktörerna är erfarna och hjälper eleverna att utveckla sin styrka, smidighet, balans och koordination. Vi har också en onlineplattform där eleverna kan lära sig parkour i sin egen takt och i sitt eget hem.",
                "contactHeader": "Kontakta oss",
                "contactDesc": "Vi skulle älska att höra från dig!",
                "inputName": "Namn",
                "inputEmail": "E-post",
                "inputMessage": "Meddelande",
                "checkboxLabel": "Jag godkänner Sekretessvillkoren",
                "submitButton": "Skicka in"
            },
                "AboutUs": {
                    "heading": "Om oss",
                    "description": "Det började med mormor och Nestor, 9 år gammal, som var uttråkade på väg hem från skolan. Sedan kom Tant Parkour, och idag erbjuder Play Parkour parkour-program och lektioner för alla åldrar.",
                    "button": "Om Play Parkour"
                }
            }
        }
    };
    
    i18n
        .use(initReactI18next)
        .init({
            resources,
            lng: "en",
            keySeparator: false,
            interpolation: {
                escapeValue: false
            }
        });
    
    export default i18n;
    